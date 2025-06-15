"use client";

import React, { useContext, useEffect, useRef } from "react";
import CustomCursorContext from "./context/CustomCursorContext";
import "./style.css";

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

type OscillatorOptions = {
  cycleCount?: number;
  amplitudePct?: number;
  phaseSpeed?: number;
  baseR?: number;
  resolution?: number;
  rampDuration?: number;
  rotationSpeed?: number;
};

type AnimatorHandle = {
  setOptions: (opts: OscillatorOptions) => void;
  reverse: () => void;
};

/* ------------------------------------------------------------------ */
/*  Oscillating-SVG animator                                          */
/* ------------------------------------------------------------------ */

function createOscillatingSvgAnimator(
  polygon: SVGPolygonElement,
  initialOptions: OscillatorOptions = {},
  onFinish?: () => void,
): AnimatorHandle {
  // Current and target states
  let phase = 0;
  let rot = 0;
  let running = true;
  let reversing = false;
  let finished = false;
  let lastTime = Date.now();

  let currAmp = 0;
  let currPhaseSpeed = 0;
  let currCycleCount = initialOptions.cycleCount ?? 3;
  let currBaseR = initialOptions.baseR ?? 10;
  let currRotationSpeed = initialOptions.rotationSpeed ?? 0.02;
  let currRampDuration = initialOptions.rampDuration ?? 5000;
  let currResolution = initialOptions.resolution ?? 120;

  let targetAmp = initialOptions.amplitudePct ?? 8;
  let targetPhaseSpeed = initialOptions.phaseSpeed ?? 0.05;
  let targetCycleCount = currCycleCount;
  // let targetBaseR = currBaseR;
  let targetBaseR = 10;
  let targetRotationSpeed = currRotationSpeed;
  let targetRampDuration = currRampDuration;
  let targetResolution = currResolution;

  // Interpolation
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  let ampT = 1,
    speedT = 1,
    cycleT = 1,
    baseRT = 1,
    rotSpeedT = 1,
    rampT = 1,
    resT = 1;

  // For smooth transitions
  function setOptions(opts: OscillatorOptions) {
    // Set new targets
    if (opts.amplitudePct !== undefined) targetAmp = opts.amplitudePct;
    if (opts.phaseSpeed !== undefined) targetPhaseSpeed = opts.phaseSpeed;
    if (opts.cycleCount !== undefined) targetCycleCount = opts.cycleCount;
    if (opts.baseR !== undefined) targetBaseR = opts.baseR;
    if (opts.rotationSpeed !== undefined)
      targetRotationSpeed = opts.rotationSpeed;
    if (opts.rampDuration !== undefined) targetRampDuration = opts.rampDuration;
    if (opts.resolution !== undefined) targetResolution = opts.resolution;
    reversing = false;
    finished = false;
  }

  function reverse() {
    reversing = true;
    targetBaseR = 10;
  }

  // Animation step
  let rafId: number;
  function step() {
    const now = Date.now();
    const dt = Math.max(1, now - lastTime) / 1000;
    lastTime = now;

    // Interpolate all values for smooth transition
    const interpSpeed = 0.025; // Lower = slower blend
    currAmp = lerp(currAmp, reversing ? 0 : targetAmp, interpSpeed);
    currPhaseSpeed = lerp(
      currPhaseSpeed,
      reversing ? 0 : targetPhaseSpeed,
      interpSpeed,
    );
    currCycleCount = lerp(currCycleCount, targetCycleCount, interpSpeed);
    currBaseR = lerp(currBaseR, targetBaseR, interpSpeed);
    currRotationSpeed = lerp(
      currRotationSpeed,
      targetRotationSpeed,
      interpSpeed,
    );
    currRampDuration = lerp(currRampDuration, targetRampDuration, interpSpeed);
    currResolution = Math.round(
      lerp(currResolution, targetResolution, interpSpeed),
    );

    phase += currPhaseSpeed;
    rot += currRotationSpeed;

    // Envelope is always on, but amplitude/speed fade with currAmp/currPhaseSpeed
    const env = Math.sin(phase);
    const pts: string[] = [];
    for (let i = 0; i < currResolution; i++) {
      const θ0 = (2 * Math.PI * i) / currResolution;
      const r = currBaseR + currAmp * env * Math.sin(currCycleCount * θ0);
      const θ = θ0 + rot;
      pts.push(`${10 + Math.cos(θ) * r},${10 + Math.sin(θ) * r}`);
    }
    polygon.setAttribute("points", pts.join(" "));

    // When reversed, stop once amp and speed have faded out
    const FINISH_THRESHOLD = 0.1; // Try 0.05 to 0.1

    if (
      reversing &&
      currAmp < FINISH_THRESHOLD &&
      currPhaseSpeed < FINISH_THRESHOLD
    ) {
      polygon.setAttribute("points", "");
      running = false;
      finished = true;
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
        // Create animator if it doesn't exist
        if (!animatorRef.current) {
          animatorRef.current = createOscillatingSvgAnimator(
            polygon.current,
            {
              cycleCount: parseInt(
                (e.currentTarget as HTMLElement).dataset.cycleCount ?? "1",
                10,
              ),
              amplitudePct: 10,
              // phaseSpeed: 0.075,
              phaseSpeed: 0.1,
              baseR: 10,
              resolution: 1000,
              rampDuration: 2500,
              rotationSpeed: 0.1,
            },
            () => {
              animatorRef.current = null;
              removeHoverCls();
            },
          );
        } else {
          // Already animating, update targets for smooth morph
          animatorRef.current.setOptions({
            cycleCount: parseInt(
              (e.currentTarget as HTMLElement).dataset.cycleCount ?? "1",
              10,
            ),
            amplitudePct: 10,
            // phaseSpeed: 0.075,
            phaseSpeed: 0.1,
            baseR: 10,
            resolution: 1000,
            rampDuration: 2500,
            rotationSpeed: 0.1,
          });
        }
      }
    };

    const onLeave = () => {
      animatorRef.current?.reverse(); // fade out smoothly
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
          viewBox="0 0 20 20"
          preserveAspectRatio="none"
          style={{
            width: "20",
            height: "20",
            // width: "100%",
            // height: "100%",
            mixBlendMode: "difference",
            isolation: "isolate",
          }}
        >
          <circle
            cx="10"
            cy="10"
            r="10"
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
