"use client";

import React, { useContext, useEffect, useRef } from "react";
import CustomCursorContext from "./context/CustomCursorContext";
import "./style.css";

type OscillatorOptions = {
  cycleCount?: number;
  amplitudePct?: number;
  phaseSpeed?: number;
  baseR?: number;
  resolution?: number;
  rampDuration?: number; // Used as transition duration
  rotationSpeed?: number;
};

type AnimatorHandle = {
  setOptions: (opts: OscillatorOptions) => void;
  reverse: () => void;
};

function createOscillatingSvgAnimator(
  polygon: SVGPolygonElement,
  initialOptions: OscillatorOptions = {},
  onFinish?: () => void,
): AnimatorHandle {
  // --- State for normalized transitions ---
  const DEFAULT_DURATION = 4000;
  let transitionDuration = initialOptions.rampDuration ?? DEFAULT_DURATION;

  // Amplitude transition
  let currAmp = 0;
  let ampFrom = 0;
  let ampTo = initialOptions.amplitudePct ?? 8;
  let ampT = 1; // [0,1]
  let ampStart = performance.now();

  // baseR transition
  let currBaseR = initialOptions.baseR ?? 50;
  let baseRFrom = currBaseR;
  let baseRTo = currBaseR;
  let baseRT = 1;
  let baseRStart = performance.now();

  // The rest
  // let currPhaseSpeed = initialOptions.phaseSpeed ?? 0.05;
  let currPhaseSpeed = initialOptions.phaseSpeed ?? 0.05;
  let currCycleCount = initialOptions.cycleCount ?? 3;
  let currRotationSpeed = initialOptions.rotationSpeed ?? 0.02;
  let currResolution = initialOptions.resolution ?? 120;

  let phase = 0;
  let rot = 0;

  // Whether we're ramping to zero (fade out)
  let reversing = false;

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function rampTo(targetAmp: number, targetBaseR: number, duration: number) {
    // Amplitude
    ampFrom = currAmp;
    ampTo = targetAmp;
    ampStart = performance.now();
    ampT = 0;

    // baseR
    baseRFrom = currBaseR;
    baseRTo = targetBaseR;
    baseRStart = performance.now();
    baseRT = 0;

    // duration
    transitionDuration = duration;
  }

  function setOptions(opts: OscillatorOptions) {
    // If amplitude or baseR change, start a normalized transition from current value to target
    const newAmp = opts.amplitudePct ?? ampTo;
    const newBaseR = opts.baseR ?? baseRTo;
    const duration = opts.rampDuration ?? transitionDuration;

    rampTo(newAmp, newBaseR, duration);

    if (opts.phaseSpeed !== undefined) currPhaseSpeed = opts.phaseSpeed;
    if (opts.cycleCount !== undefined) currCycleCount = opts.cycleCount;
    if (opts.rotationSpeed !== undefined)
      currRotationSpeed = opts.rotationSpeed;
    if (opts.resolution !== undefined) currResolution = opts.resolution;

    reversing = false;
  }

  function reverse() {
    // Smoothly ramp both amp and baseR to zero (or a "rest" value if you prefer)
    rampTo(0, currBaseR, transitionDuration); // baseR doesn't change, amp fades out
    reversing = true;
  }

  // Animation step
  let rafId: number;
  function step() {
    const now = performance.now();

    // --- Amplitude normalized transition ---
    if (ampT < 1) ampT = Math.min(1, (now - ampStart) / transitionDuration);
    currAmp = ampFrom + (ampTo - ampFrom) * easeInOutQuad(ampT);

    // --- baseR normalized transition ---
    if (baseRT < 1)
      baseRT = Math.min(1, (now - baseRStart) / transitionDuration);
    currBaseR = baseRFrom + (baseRTo - baseRFrom) * easeInOutQuad(baseRT);

    // Animate the SVG
    phase += currPhaseSpeed;
    rot += currRotationSpeed;
    const env = Math.sin(phase);
    const pts: string[] = [];
    for (let i = 0; i < currResolution; i++) {
      const θ0 = (2 * Math.PI * i) / currResolution;
      const r = currBaseR + currAmp * env * Math.sin(currCycleCount * θ0);
      const θ = θ0 + rot;
      pts.push(`${50 + Math.cos(θ) * r},${50 + Math.sin(θ) * r}`);
    }
    polygon.setAttribute("points", pts.join(" "));

    // Finish when reversing and amp is near zero
    const FINISH_THRESHOLD = 0.1;
    if (reversing && currAmp < FINISH_THRESHOLD && ampT === 1) {
      polygon.setAttribute("points", "");
      onFinish?.();
      return;
    }

    rafId = requestAnimationFrame(step);
  }

  rafId = requestAnimationFrame(step);

  return {
    setOptions,
    reverse,
  };
}

/* ------------------------------------------------------------------ */
/*  Custom cursor component                                           */
/* ------------------------------------------------------------------ */

function CustomCursor(): JSX.Element {
  const { type } = useContext(CustomCursorContext);

  const wrapper = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLDivElement>(null);
  const secondary = useRef<HTMLDivElement>(null);
  const polygon = useRef<SVGPolygonElement>(null);

  const animatorRef = useRef<AnimatorHandle | null>(null);
  const posRef = useRef({ x: 0, y: 0, raf: -1 });

  useEffect(() => {
    const addHoverCls = () => {
      wrapper.current?.classList.add("hovering");
      main.current?.classList.add("hovering");
      secondary.current?.classList.add("hovering");
    };
    const removeHoverCls = () => {
      wrapper.current?.classList.remove("hovering");
      main.current?.classList.remove("hovering");
      secondary.current?.classList.remove("hovering");
    };

    const onHover = (e: MouseEvent) => {
      addHoverCls();
      if (polygon.current) {
        const cycleCount = parseInt(
          (e.currentTarget as HTMLElement).dataset.cycleCount ?? "1",
          10,
        );
        const amplitudePct = 20;
        const phaseSpeed = 0.1;
        const baseR = 33;
        const resolution = 1000;
        const rampDuration = 350;
        const rotationSpeed = 0.1;
        if (!animatorRef.current) {
          animatorRef.current = createOscillatingSvgAnimator(
            polygon.current,
            {
              cycleCount,
              amplitudePct,
              phaseSpeed,
              baseR,
              resolution,
              rampDuration,
              rotationSpeed,
            },
            () => {
              animatorRef.current = null;
              removeHoverCls();
            },
          );
        } else {
          animatorRef.current.setOptions({
            cycleCount,
            amplitudePct,
            phaseSpeed,
            baseR,
            resolution,
            rampDuration,
            rotationSpeed,
          });
        }
      }
    };

    const onLeave = () => {
      animatorRef.current?.reverse();
    };

    const anchors = Array.from(document.querySelectorAll("a"));
    anchors.forEach((a) => {
      a.addEventListener("mouseenter", onHover);
      a.addEventListener("mouseleave", onLeave);
    });

    return () => {
      anchors.forEach((a) => {
        a.removeEventListener("mouseenter", onHover);
        a.removeEventListener("mouseleave", onLeave);
      });
      animatorRef.current?.reverse();
    };
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (main.current) {
        main.current.style.transform =
          `translate3d(${e.clientX - main.current.clientWidth / 2}px,` +
          `${e.clientY - main.current.clientHeight / 2}px,0)`;
      }
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const k = 0.1;
    const d = 0.78;
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };

    const follow = () => {
      posRef.current.raf = requestAnimationFrame(follow);

      vel.x = (vel.x + (posRef.current.x - pos.x) * k) * d;
      vel.y = (vel.y + (posRef.current.y - pos.y) * k) * d;

      pos.x += vel.x;
      pos.y += vel.y;

      if (secondary.current) {
        secondary.current.style.transform =
          `translate3d(${pos.x - secondary.current.clientWidth / 2}px,` +
          `${pos.y - secondary.current.clientHeight / 2}px,0)`;
      }
    };

    follow();
    return () => cancelAnimationFrame(posRef.current.raf);
  }, []);

  return (
    <div className={`cursor-wrapper ${type}`} ref={wrapper}>
      <div className="main-cursor" ref={main}>
        <div className="main-cursor-background" />
      </div>

      <div className="secondary-cursor" ref={secondary}>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            mixBlendMode: "difference",
            isolation: "isolate",
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="none"
            stroke="#fff"
            style={{ strokeWidth: "1px", vectorEffect: "non-scaling-stroke" }}
          />
          <polygon
            ref={polygon}
            fill="none"
            stroke="#fff"
            style={{ strokeWidth: "2px", vectorEffect: "non-scaling-stroke" }}
          />
        </svg>
      </div>
    </div>
  );
}

export default CustomCursor;
// ---------------------------------------------------------------------------------------------------------------

// "use client";
//
// import React, { useContext, useEffect, useRef } from "react";
// import CustomCursorContext from "./context/CustomCursorContext";
// import "./style.css";
//
// type OscillatorOptions = {
//   cycleCount?: number;
//   amplitudePct?: number;
//   phaseSpeed?: number;
//   baseR?: number;
//   resolution?: number;
//   rampDuration?: number;
//   rotationSpeed?: number;
// };
//
// type AnimatorHandle = {
//   setOptions: (opts: OscillatorOptions) => void;
//   reverse: () => void;
// };
//
// function createOscillatingSvgAnimator(
//   polygon: SVGPolygonElement,
//   initialOptions: OscillatorOptions = {},
//   onFinish?: () => void,
// ): AnimatorHandle {
//   let phase = 0;
//   let rot = 0;
//   let reversing = false;
//
//   // Amplitude transition
//   let currAmp = 0;
//   let ampFrom = 0;
//   let ampTo = initialOptions.amplitudePct ?? 8;
//   let ampT = 1; // [0,1]
//   let ampStart = performance.now();
//   let ampDuration = 350; // ms (fixed, or get from options if you want)
//
//   // baseR transition
//   let currBaseR = initialOptions.baseR ?? 50;
//   let baseRFrom = currBaseR;
//   let baseRTo = currBaseR;
//   let baseRT = 1;
//   let baseRStart = performance.now();
//   let baseRDuration = 350;
//
//   // The rest (not normalized, just for simplicity here)
//   let currPhaseSpeed = initialOptions.phaseSpeed ?? 0.05;
//   let currCycleCount = initialOptions.cycleCount ?? 3;
//   let currRotationSpeed = initialOptions.rotationSpeed ?? 0.02;
//   let currResolution = initialOptions.resolution ?? 120;
//
//   // For the reverse (fade out)
//   function reverse() {
//     // Amplitude
//     ampFrom = currAmp;
//     ampTo = 0;
//     ampStart = performance.now();
//     ampDuration = 1000;
//     ampT = 0;
//
//     // baseR stays where it is (could also ramp to default value if you wish)
//     reversing = true;
//   }
//
//   function setOptions(opts: OscillatorOptions) {
//     if (opts.amplitudePct !== undefined && opts.amplitudePct !== ampTo) {
//       ampFrom = currAmp;
//       ampTo = opts.amplitudePct;
//       ampStart = performance.now();
//       ampDuration = 350;
//       ampT = 0;
//     }
//     if (opts.baseR !== undefined && opts.baseR !== baseRTo) {
//       baseRFrom = currBaseR;
//       baseRTo = opts.baseR;
//       baseRStart = performance.now();
//       baseRDuration = 350;
//       baseRT = 0;
//     }
//     reversing = false;
//   }
//
//   function easeInOutQuad(t: number) {
//     return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
//   }
//
//   // Animation step
//   let rafId: number;
//   function step() {
//     const now = performance.now();
//
//     // --- Amplitude normalized transition ---
//     if (ampT < 1) ampT = Math.min(1, (now - ampStart) / ampDuration);
//     currAmp = ampFrom + (ampTo - ampFrom) * easeInOutQuad(ampT);
//
//     // --- baseR normalized transition ---
//     if (baseRT < 1) baseRT = Math.min(1, (now - baseRStart) / baseRDuration);
//     currBaseR = baseRFrom + (baseRTo - baseRFrom) * easeInOutQuad(baseRT);
//
//     // Animate the SVG
//     phase += currPhaseSpeed;
//     rot += currRotationSpeed;
//     const env = Math.sin(phase);
//     const pts: string[] = [];
//     for (let i = 0; i < currResolution; i++) {
//       const θ0 = (2 * Math.PI * i) / currResolution;
//       const r = currBaseR + currAmp * env * Math.sin(currCycleCount * θ0);
//       const θ = θ0 + rot;
//       pts.push(`${50 + Math.cos(θ) * r},${50 + Math.sin(θ) * r}`);
//     }
//     polygon.setAttribute("points", pts.join(" "));
//
//     // Finish when reversing and amp is near zero
//     const FINISH_THRESHOLD = 0.1;
//     if (reversing && currAmp < FINISH_THRESHOLD && ampT === 1) {
//       polygon.setAttribute("points", "");
//       onFinish?.();
//       return;
//     }
//
//     rafId = requestAnimationFrame(step);
//   }
//
//   rafId = requestAnimationFrame(step);
//
//   return {
//     setOptions,
//     reverse,
//   };
// }
//
// /* ------------------------------------------------------------------ */
// /*  Custom cursor component                                           */
// /* ------------------------------------------------------------------ */
//
// function CustomCursor(): JSX.Element {
//   const { type } = useContext(CustomCursorContext);
//
//   const wrapper = useRef<HTMLDivElement>(null);
//   const main = useRef<HTMLDivElement>(null);
//   const secondary = useRef<HTMLDivElement>(null);
//   const polygon = useRef<SVGPolygonElement>(null);
//
//   const animatorRef = useRef<AnimatorHandle | null>(null);
//   const posRef = useRef({ x: 0, y: 0, raf: -1 });
//
//   useEffect(() => {
//     const addHoverCls = () => {
//       wrapper.current?.classList.add("hovering");
//       main.current?.classList.add("hovering");
//       secondary.current?.classList.add("hovering");
//     };
//     const removeHoverCls = () => {
//       wrapper.current?.classList.remove("hovering");
//       main.current?.classList.remove("hovering");
//       secondary.current?.classList.remove("hovering");
//     };
//
//     const onHover = (e: MouseEvent) => {
//       addHoverCls();
//       if (polygon.current) {
//         if (!animatorRef.current) {
//           animatorRef.current = createOscillatingSvgAnimator(
//             polygon.current,
//             {
//               cycleCount: parseInt(
//                 (e.currentTarget as HTMLElement).dataset.cycleCount ?? "1",
//                 10,
//               ),
//               amplitudePct: 20,
//               phaseSpeed: 0.1,
//               baseR: 33,
//               resolution: 1000,
//               rampDuration: 2500,
//               rotationSpeed: 0.1,
//             },
//             () => {
//               animatorRef.current = null;
//               removeHoverCls();
//             },
//           );
//         } else {
//           animatorRef.current.setOptions({
//             cycleCount: parseInt(
//               (e.currentTarget as HTMLElement).dataset.cycleCount ?? "1",
//               10,
//             ),
//             amplitudePct: 20,
//             phaseSpeed: 0.1,
//             baseR: 33,
//             resolution: 1000,
//             rampDuration: 2500,
//             rotationSpeed: 0.1,
//           });
//         }
//       }
//     };
//
//     const onLeave = () => {
//       animatorRef.current?.reverse();
//     };
//
//     const anchors = Array.from(document.querySelectorAll("a"));
//     anchors.forEach((a) => {
//       a.addEventListener("mouseenter", onHover);
//       a.addEventListener("mouseleave", onLeave);
//     });
//
//     return () => {
//       anchors.forEach((a) => {
//         a.removeEventListener("mouseenter", onHover);
//         a.removeEventListener("mouseleave", onLeave);
//       });
//       animatorRef.current?.reverse();
//     };
//   }, []);
//
//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       posRef.current.x = e.clientX;
//       posRef.current.y = e.clientY;
//       if (main.current) {
//         main.current.style.transform =
//           `translate3d(${e.clientX - main.current.clientWidth / 2}px,` +
//           `${e.clientY - main.current.clientHeight / 2}px,0)`;
//       }
//     };
//     document.addEventListener("mousemove", move);
//     return () => document.removeEventListener("mousemove", move);
//   }, []);
//
//   useEffect(() => {
//     const k = 0.1;
//     const d = 0.78;
//     const pos = { x: 0, y: 0 };
//     const vel = { x: 0, y: 0 };
//
//     const follow = () => {
//       posRef.current.raf = requestAnimationFrame(follow);
//
//       vel.x = (vel.x + (posRef.current.x - pos.x) * k) * d;
//       vel.y = (vel.y + (posRef.current.y - pos.y) * k) * d;
//
//       pos.x += vel.x;
//       pos.y += vel.y;
//
//       if (secondary.current) {
//         secondary.current.style.transform =
//           `translate3d(${pos.x - secondary.current.clientWidth / 2}px,` +
//           `${pos.y - secondary.current.clientHeight / 2}px,0)`;
//       }
//     };
//
//     follow();
//     return () => cancelAnimationFrame(posRef.current.raf);
//   }, []);
//
//   return (
//     <div className={`cursor-wrapper ${type}`} ref={wrapper}>
//       <div className="main-cursor" ref={main}>
//         <div className="main-cursor-background" />
//       </div>
//
//       <div className="secondary-cursor" ref={secondary}>
//         <svg
//           viewBox="0 0 100 100"
//           preserveAspectRatio="none"
//           style={{
//             width: "100%",
//             height: "100%",
//             mixBlendMode: "difference",
//             isolation: "isolate",
//           }}
//         >
//           <circle
//             cx="50"
//             cy="50"
//             r="50"
//             fill="none"
//             stroke="#fff"
//             style={{ strokeWidth: "1px", vectorEffect: "non-scaling-stroke" }}
//           />
//           <polygon
//             ref={polygon}
//             fill="none"
//             stroke="#fff"
//             style={{ strokeWidth: "2px", vectorEffect: "non-scaling-stroke" }}
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }
//
// export default CustomCursor;

// -----------------------------------------------------------------------------------------------------------------

// "use client";
//
// import React, { useContext, useEffect, useRef } from "react";
// import CustomCursorContext from "./context/CustomCursorContext";
// import "./style.css";
//
// /* ------------------------------------------------------------------ */
// /*  Types                                                             */
// /* ------------------------------------------------------------------ */
//
// type OscillatorOptions = {
//   cycleCount?: number;
//   amplitudePct?: number;
//   phaseSpeed?: number;
//   baseR?: number;
//   resolution?: number;
//   rampDuration?: number;
//   rotationSpeed?: number;
// };
//
// type AnimatorHandle = {
//   setOptions: (opts: OscillatorOptions) => void;
//   reverse: () => void;
// };
//
// /* ------------------------------------------------------------------ */
// /*  Oscillating-SVG animator                                          */
// /* ------------------------------------------------------------------ */
//
// function createOscillatingSvgAnimator(
//   polygon: SVGPolygonElement,
//   initialOptions: OscillatorOptions = {},
//   onFinish?: () => void,
// ): AnimatorHandle {
//   // Current and target states
//   let phase = 0;
//   let rot = 0;
//   let running = true;
//   let reversing = false;
//   let finished = false;
//   let lastTime = Date.now();
//
//   let currAmp = 0;
//   let currPhaseSpeed = 0;
//   let currCycleCount = initialOptions.cycleCount ?? 3;
//   let currBaseR = initialOptions.baseR ?? 50;
//   let currRotationSpeed = initialOptions.rotationSpeed ?? 0.02;
//   let currRampDuration = initialOptions.rampDuration ?? 5000;
//   let currResolution = initialOptions.resolution ?? 120;
//
//   let targetAmp = initialOptions.amplitudePct ?? 8;
//   let targetPhaseSpeed = initialOptions.phaseSpeed ?? 0.05;
//   let targetCycleCount = currCycleCount;
//   let targetBaseR = currBaseR;
//   let targetRotationSpeed = currRotationSpeed;
//   let targetRampDuration = currRampDuration;
//   let targetResolution = currResolution;
//
//   // Interpolation
//   const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
//
//   let ampT = 1,
//     speedT = 1,
//     cycleT = 1,
//     baseRT = 1,
//     rotSpeedT = 1,
//     rampT = 1,
//     resT = 1;
//
//   // For smooth transitions
//   function setOptions(opts: OscillatorOptions) {
//     // Set new targets
//     if (opts.amplitudePct !== undefined) targetAmp = opts.amplitudePct;
//     if (opts.phaseSpeed !== undefined) targetPhaseSpeed = opts.phaseSpeed;
//     if (opts.cycleCount !== undefined) targetCycleCount = opts.cycleCount;
//     if (opts.baseR !== undefined) targetBaseR = opts.baseR;
//     if (opts.rotationSpeed !== undefined)
//       targetRotationSpeed = opts.rotationSpeed;
//     if (opts.rampDuration !== undefined) targetRampDuration = opts.rampDuration;
//     if (opts.resolution !== undefined) targetResolution = opts.resolution;
//     reversing = false;
//     finished = false;
//   }
//
//   function reverse() {
//     reversing = true;
//   }
//
//   // Animation step
//   let rafId: number;
//   function step() {
//     const now = Date.now();
//     const dt = Math.max(1, now - lastTime) / 1000;
//     lastTime = now;
//
//     // Interpolate all values for smooth transition
//     const interpSpeed = 0.025; // Lower = slower blend
//     currAmp = lerp(currAmp, reversing ? 0 : targetAmp, interpSpeed);
//     currPhaseSpeed = lerp(
//       currPhaseSpeed,
//       reversing ? 0 : targetPhaseSpeed,
//       interpSpeed,
//     );
//     currCycleCount = lerp(currCycleCount, targetCycleCount, interpSpeed);
//     currBaseR = lerp(currBaseR, targetBaseR, interpSpeed);
//     currRotationSpeed = lerp(
//       currRotationSpeed,
//       targetRotationSpeed,
//       interpSpeed,
//     );
//     currRampDuration = lerp(currRampDuration, targetRampDuration, interpSpeed);
//     currResolution = Math.round(
//       lerp(currResolution, targetResolution, interpSpeed),
//     );
//
//     phase += currPhaseSpeed;
//     rot += currRotationSpeed;
//
//     // Envelope is always on, but amplitude/speed fade with currAmp/currPhaseSpeed
//     const env = Math.sin(phase);
//     const pts: string[] = [];
//     for (let i = 0; i < currResolution; i++) {
//       const θ0 = (2 * Math.PI * i) / currResolution;
//       const r = currBaseR + currAmp * env * Math.sin(currCycleCount * θ0);
//       const θ = θ0 + rot;
//       pts.push(`${50 + Math.cos(θ) * r},${50 + Math.sin(θ) * r}`);
//     }
//     polygon.setAttribute("points", pts.join(" "));
//
//     // When reversed, stop once amp and speed have faded out
//     const FINISH_THRESHOLD = 0.1; // Try 0.05 to 0.1
//
//     if (
//       reversing &&
//       currAmp < FINISH_THRESHOLD &&
//       currPhaseSpeed < FINISH_THRESHOLD
//     ) {
//       polygon.setAttribute("points", "");
//       running = false;
//       finished = true;
//       onFinish?.();
//       return;
//     }
//
//     rafId = requestAnimationFrame(step);
//   }
//
//   rafId = requestAnimationFrame(step);
//
//   return {
//     setOptions,
//     reverse,
//   };
// }
//
// /* ------------------------------------------------------------------ */
// /*  Custom cursor component                                           */
// /* ------------------------------------------------------------------ */
//
// function CustomCursor(): JSX.Element {
//   const { type } = useContext(CustomCursorContext);
//
//   const wrapper = useRef<HTMLDivElement>(null);
//   const main = useRef<HTMLDivElement>(null);
//   const secondary = useRef<HTMLDivElement>(null);
//   const polygon = useRef<SVGPolygonElement>(null);
//
//   const animatorRef = useRef<AnimatorHandle | null>(null);
//   const posRef = useRef({ x: 0, y: 0, raf: -1 });
//
//   useEffect(() => {
//     const addHoverCls = () => {
//       wrapper.current?.classList.add("hovering");
//       main.current?.classList.add("hovering");
//       secondary.current?.classList.add("hovering");
//     };
//     const removeHoverCls = () => {
//       wrapper.current?.classList.remove("hovering");
//       main.current?.classList.remove("hovering");
//       secondary.current?.classList.remove("hovering");
//     };
//
//     const onHover = (e: MouseEvent) => {
//       addHoverCls();
//       if (polygon.current) {
//         // Create animator if it doesn't exist
//         if (!animatorRef.current) {
//           animatorRef.current = createOscillatingSvgAnimator(
//             polygon.current,
//             {
//               cycleCount: parseInt(
//                 (e.currentTarget as HTMLElement).dataset.cycleCount ?? "1",
//                 10,
//               ),
//               amplitudePct: 20,
//               // phaseSpeed: 0.075,
//               phaseSpeed: 0.1,
//               baseR: 33,
//               resolution: 1000,
//               rampDuration: 2500,
//               rotationSpeed: 0.1,
//             },
//             () => {
//               animatorRef.current = null;
//               removeHoverCls();
//             },
//           );
//         } else {
//           // Already animating, update targets for smooth morph
//           animatorRef.current.setOptions({
//             cycleCount: parseInt(
//               (e.currentTarget as HTMLElement).dataset.cycleCount ?? "1",
//               10,
//             ),
//             amplitudePct: 20,
//             // phaseSpeed: 0.075,
//             phaseSpeed: 0.1,
//             baseR: 33,
//             resolution: 1000,
//             rampDuration: 2500,
//             rotationSpeed: 0.1,
//           });
//         }
//       }
//     };
//
//     const onLeave = () => {
//       animatorRef.current?.reverse(); // fade out smoothly
//     };
//
//     const anchors = Array.from(document.querySelectorAll("a"));
//     anchors.forEach((a) => {
//       a.addEventListener("mouseenter", onHover);
//       a.addEventListener("mouseleave", onLeave);
//     });
//
//     return () => {
//       anchors.forEach((a) => {
//         a.removeEventListener("mouseenter", onHover);
//         a.removeEventListener("mouseleave", onLeave);
//       });
//       animatorRef.current?.reverse();
//     };
//   }, []);
//
//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       posRef.current.x = e.clientX;
//       posRef.current.y = e.clientY;
//       if (main.current) {
//         main.current.style.transform =
//           `translate3d(${e.clientX - main.current.clientWidth / 2}px,` +
//           `${e.clientY - main.current.clientHeight / 2}px,0)`;
//       }
//     };
//     document.addEventListener("mousemove", move);
//     return () => document.removeEventListener("mousemove", move);
//   }, []);
//
//   useEffect(() => {
//     const k = 0.1;
//     const d = 0.78;
//     const pos = { x: 0, y: 0 };
//     const vel = { x: 0, y: 0 };
//
//     const follow = () => {
//       posRef.current.raf = requestAnimationFrame(follow);
//
//       vel.x = (vel.x + (posRef.current.x - pos.x) * k) * d;
//       vel.y = (vel.y + (posRef.current.y - pos.y) * k) * d;
//
//       pos.x += vel.x;
//       pos.y += vel.y;
//
//       if (secondary.current) {
//         secondary.current.style.transform =
//           `translate3d(${pos.x - secondary.current.clientWidth / 2}px,` +
//           `${pos.y - secondary.current.clientHeight / 2}px,0)`;
//       }
//     };
//
//     follow();
//     return () => cancelAnimationFrame(posRef.current.raf);
//   }, []);
//
//   return (
//     <div className={`cursor-wrapper ${type}`} ref={wrapper}>
//       <div className="main-cursor" ref={main}>
//         <div className="main-cursor-background" />
//       </div>
//
//       <div className="secondary-cursor" ref={secondary}>
//         <svg
//           viewBox="0 0 100 100"
//           preserveAspectRatio="none"
//           style={{
//             width: "100%",
//             height: "100%",
//             mixBlendMode: "difference",
//             isolation: "isolate",
//           }}
//         >
//           <circle
//             cx="50"
//             cy="50"
//             r="50"
//             fill="none"
//             stroke="#fff"
//             style={{ strokeWidth: "1px", vectorEffect: "non-scaling-stroke" }}
//           />
//           <polygon
//             ref={polygon}
//             fill="none"
//             stroke="#fff"
//             style={{ strokeWidth: "2px", vectorEffect: "non-scaling-stroke" }}
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }
//
// export default CustomCursor;
