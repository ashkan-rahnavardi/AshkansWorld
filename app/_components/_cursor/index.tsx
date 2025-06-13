"use client";

import React, { useContext, useEffect, useRef } from "react";
import CustomCursorContext from "./context/CustomCursorContext";
import "./style.css";

/**
 * Animate an SVG polygon to an oscillating sine-wave outline:
 *   r(θ,t) = baseR + amplitudePct * sin(cycleCount*θ) * sin(phase)
 */
function createOscillatingSvgAnimator(
  polygon: SVGPolygonElement,
  {
    cycleCount = 3, // lobes
    amplitudePct = 8, // max deviation (% of baseR)
    phaseSpeed = 0.05, // speed of oscillation
    baseR = 50, // base radius (% of viewBox)
    resolution = 120, // sampling density
  }: {
    cycleCount?: number;
    amplitudePct?: number;
    phaseSpeed?: number;
    baseR?: number;
    resolution?: number;
  } = {},
) {
  let phase = 0;
  let rafId: number;

  const animate = () => {
    phase += phaseSpeed;
    const envelope = Math.sin(phase);
    const pts: string[] = [];

    for (let i = 0; i < resolution; i++) {
      const theta = (2 * Math.PI * i) / resolution;
      const r = baseR + amplitudePct * envelope * Math.sin(cycleCount * theta);
      const x = 50 + Math.cos(theta) * r;
      const y = 50 + Math.sin(theta) * r;
      pts.push(`${x},${y}`);
    }

    polygon.setAttribute("points", pts.join(" "));
    rafId = requestAnimationFrame(animate);
  };

  animate();
  return () => cancelAnimationFrame(rafId);
}

const CustomCursor: React.FC = () => {
  const { type } = useContext(CustomCursorContext);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const mainCursor = useRef<HTMLDivElement>(null);
  const cursorWrapper = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ mouseX: 0, mouseY: 0, key: -1 });
  const stopWaveRef = useRef<() => void>();
  const svgRef = useRef<SVGSVGElement>(null);
  const polygonRef = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    const handleAnchorHover = () => {
      cursorWrapper.current?.classList.add("hovering");
      mainCursor.current?.classList.add("hovering");
      secondaryCursor.current?.classList.add("hovering");

      if (polygonRef.current) {
        stopWaveRef.current = createOscillatingSvgAnimator(polygonRef.current, {
          cycleCount: 5,
          amplitudePct: 12,
          phaseSpeed: 1.0,
          baseR: 50,
          resolution: 150,
        });
      }
    };

    const handleAnchorLeave = () => {
      cursorWrapper.current?.classList.remove("hovering");
      mainCursor.current?.classList.remove("hovering");
      secondaryCursor.current?.classList.remove("hovering");

      stopWaveRef.current?.();
      if (polygonRef.current) {
        polygonRef.current.setAttribute("points", "");
      }
    };

    document.querySelectorAll("a").forEach((a) => {
      a.addEventListener("mouseenter", handleAnchorHover);
      a.addEventListener("mouseleave", handleAnchorLeave);
    });
    return () => {
      document.querySelectorAll("a").forEach((a) => {
        a.removeEventListener("mouseenter", handleAnchorHover);
        a.removeEventListener("mouseleave", handleAnchorLeave);
      });
      stopWaveRef.current?.();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      positionRef.current.mouseX = x;
      positionRef.current.mouseY = y;
      if (mainCursor.current) {
        mainCursor.current.style.transform =
          `translate3d(${x - mainCursor.current.clientWidth / 2}px, ` +
          `${y - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const posX = { current: 0 };
    const posY = { current: 0 };
    const velX = { current: 0 };
    const velY = { current: 0 };
    const k = 0.1,
      d = 0.78;
    const animate = () => {
      positionRef.current.key = requestAnimationFrame(animate);
      const dx = positionRef.current.mouseX - posX.current;
      const dy = positionRef.current.mouseY - posY.current;
      velX.current += dx * k;
      velY.current += dy * k;
      velX.current *= d;
      velY.current *= d;
      posX.current += velX.current;
      posY.current += velY.current;
      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform =
          `translate3d(${posX.current - secondaryCursor.current.clientWidth / 2}px, ` +
          `${posY.current - secondaryCursor.current.clientHeight / 2}px, 0)`;
      }
    };
    animate();
    return () => cancelAnimationFrame(positionRef.current.key);
  }, []);

  return (
    <div className={`cursor-wrapper ${type}`} ref={cursorWrapper}>
      <div className="main-cursor" ref={mainCursor}>
        <div className="main-cursor-background" />
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <svg
          ref={svgRef}
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
            style={{
              strokeWidth: "1px",
              vectorEffect: "non-scaling-stroke",
            }}
          />
          <polygon
            ref={polygonRef}
            fill="none"
            stroke="#fff"
            style={{
              strokeWidth: "2px",
              vectorEffect: "non-scaling-stroke",
              /* no need to re-specify mixBlendMode here */
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;

// "use client";
//
// import React, { useContext, useEffect, useRef } from "react";
// import CustomCursorContext from "./context/CustomCursorContext";
// import "./style.css";
//
// // — index.tsx (or wherever you want it) —
//
// /**
//  * Animate an element’s clip-path to a rotating sine-wave circle:
//  *   r(θ,t) = baseR + amplitudePct * sin(cycleCount*θ + phase)
//  */
// function createOscillatingCircleAnimator(
//   el: HTMLElement,
//   {
//     cycleCount = 3, // number of wave lobes (m)
//     amplitudePct = 8, // A (% of R)
//     phaseSpeed = 0.1, // ω (radians per frame)
//     baseR = 50, // R  (% of element’s size)
//     resolution = 120, // sampling density
//   }: {
//     cycleCount?: number;
//     amplitudePct?: number;
//     phaseSpeed?: number;
//     baseR?: number;
//     resolution?: number;
//   } = {},
// ) {
//   let phase = 0;
//   let rafId: number;
//
//   const animate = () => {
//     phase += phaseSpeed;
//     const pts: string[] = [];
//
//     for (let i = 0; i < resolution; i++) {
//       const θ = (2 * Math.PI * i) / resolution;
//       const r = baseR + amplitudePct * Math.sin(cycleCount * θ + phase);
//       const x = 50 + Math.cos(θ) * r;
//       const y = 50 + Math.sin(θ) * r;
//       pts.push(`${x}% ${y}%`);
//     }
//
//     el.style.clipPath = `polygon(${pts.join(",")})`;
//     rafId = requestAnimationFrame(animate);
//   };
//
//   animate();
//   return () => cancelAnimationFrame(rafId);
// }
//
// // ─────────────────────────────────────────────────────────────────────────────
//
// const CustomCursor: React.FC = () => {
//   const { type } = useContext(CustomCursorContext);
//   const secondaryCursor = useRef<HTMLDivElement>(null);
//   const mainCursor = useRef<HTMLDivElement>(null);
//   const cursorWrapper = useRef<HTMLDivElement>(null);
//   const positionRef = useRef({
//     mouseX: 0,
//     mouseY: 0,
//     destinationX: 0,
//     destinationY: 0,
//     distanceX: 0,
//     distanceY: 0,
//     key: -1,
//   });
//
//   // keep track of our stopWave function
//   const stopWaveRef = useRef<() => void>();
//
//   useEffect(() => {
//     const handleAnchorHover = () => {
//       cursorWrapper.current?.classList.add("hovering");
//       mainCursor.current?.classList.add("hovering");
//       secondaryCursor.current?.classList.add("hovering");
//
//       if (secondaryCursor.current) {
//         const bg =
//           secondaryCursor.current.querySelector<HTMLElement>(
//             ".cursor-background",
//           )!;
//         stopWaveRef.current = createOscillatingCircleAnimator(bg, {
//           cycleCount: 20, // “m” from the equation
//           amplitudePct: 10, // “A”
//           phaseSpeed: 0.1, // “ω”
//           baseR: 50, // “R”
//           resolution: 150, // tweak for smoothness/performance
//         });
//       }
//     };
//
//     const handleAnchorLeave = () => {
//       cursorWrapper.current?.classList.remove("hovering");
//       mainCursor.current?.classList.remove("hovering");
//       secondaryCursor.current?.classList.remove("hovering");
//
//       stopWaveRef.current?.();
//       if (secondaryCursor.current) {
//         const bg =
//           secondaryCursor.current.querySelector<HTMLElement>(
//             ".cursor-background",
//           )!;
//         bg.style.clipPath = "";
//         bg.style.borderRadius = "50%";
//       }
//     };
//
//     const anchorElements = document.querySelectorAll("a");
//     anchorElements.forEach((anchor) => {
//       anchor.addEventListener("mouseenter", handleAnchorHover);
//       anchor.addEventListener("mouseleave", handleAnchorLeave);
//     });
//
//     return () => {
//       anchorElements.forEach((anchor) => {
//         anchor.removeEventListener("mouseenter", handleAnchorHover);
//         anchor.removeEventListener("mouseleave", handleAnchorLeave);
//       });
//       // ensure wave is cleaned up
//       stopWaveRef.current?.();
//     };
//   }, []);
//
//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       const { clientX, clientY } = event;
//       const mouseX = clientX;
//       const mouseY = clientY;
//
//       positionRef.current.mouseX =
//         mouseX - (secondaryCursor.current?.clientWidth || 0) / 2;
//       positionRef.current.mouseY =
//         mouseY - (secondaryCursor.current?.clientHeight || 0) / 2;
//
//       if (mainCursor.current) {
//         mainCursor.current.style.transform = `translate3d(${
//           mouseX - (mainCursor.current.clientWidth || 0) / 2
//         }px, ${mouseY - (mainCursor.current.clientHeight || 0) / 2}px, 0)`;
//       }
//     };
//
//     document.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
//
//   useEffect(() => {
//     const posX = { current: 0 };
//     const posY = { current: 0 };
//     const velX = { current: 0 };
//     const velY = { current: 0 };
//
//     const k = 0.1; // spring stiffness
//     const d = 0.78; // damping factor
//
//     const animate = () => {
//       positionRef.current.key = requestAnimationFrame(animate);
//
//       const dx = positionRef.current.mouseX - posX.current;
//       const dy = positionRef.current.mouseY - posY.current;
//
//       velX.current += dx * k;
//       velY.current += dy * k;
//
//       velX.current *= d;
//       velY.current *= d;
//
//       posX.current += velX.current;
//       posY.current += velY.current;
//
//       if (secondaryCursor.current) {
//         secondaryCursor.current.style.transform = `translate3d(${posX.current}px, ${posY.current}px, 0)`;
//       }
//     };
//
//     animate();
//     return () => cancelAnimationFrame(positionRef.current.key);
//   }, []);
//
//   return (
//     <div className={`cursor-wrapper ${type}`} ref={cursorWrapper}>
//       <div className="main-cursor" ref={mainCursor}>
//         <div className="main-cursor-background"></div>
//       </div>
//       <div className="secondary-cursor" ref={secondaryCursor}>
//         <div className="cursor-background"></div>
//       </div>
//     </div>
//   );
// };
//
// export default CustomCursor;
