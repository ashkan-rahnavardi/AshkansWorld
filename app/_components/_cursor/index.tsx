"use client";

import React, { useContext, useEffect, useRef } from "react";
import CustomCursorContext from "./context/CustomCursorContext";
import "./style.css";

/* ------------------------------------------------------------------ */
/*  Constants                                                         */
/* ------------------------------------------------------------------ */

const CONFIG = {
  BLEND_RATE: 1.5, // 1 · s⁻¹ – how fast current → target values blend
  SPRING_K: 0.1, // spring stiffness for follower cursor
  SPRING_D: 0.78, // damping for follower cursor
  FINISH_THRESHOLD: 0.1,
  DEFAULT_BASE_R: 8,
};

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

type OscillatorOptions = {
  cycleCount?: number;
  amplitudePct?: number;
  phaseSpeed?: number; // rad · s⁻¹
  baseR?: number;
  resolution?: number;
  rotationSpeed?: number; // rad · s⁻¹
};

type AnimatorHandle = {
  setOptions: (opts: OscillatorOptions) => void;
  reverse: () => void;
  cancel: () => void;
};

/* ------------------------------------------------------------------ */
/*  Oscillating-SVG animator                                          */
/* ------------------------------------------------------------------ */

function createOscillatingSvgAnimator(
  polygon: SVGPolygonElement,
  initialOptions: OscillatorOptions = {},
  onFinish?: () => void,
): AnimatorHandle {
  /* ---------------------------- state ---------------------------- */

  let phase = 0;
  let rot = 0;
  let lastTime = performance.now();

  // current values
  let currAmp = 0;
  let currPhaseSpeed = 0; // rad · s⁻¹
  let currCycleCount = initialOptions.cycleCount ?? 3;
  let currBaseR = initialOptions.baseR ?? CONFIG.DEFAULT_BASE_R;
  let currRotationSpeed = initialOptions.rotationSpeed ?? 0.02; // rad · s⁻¹
  let currResolution = initialOptions.resolution ?? 120;

  // target values
  let targetAmp = initialOptions.amplitudePct ?? 8;
  let targetPhaseSpeed = initialOptions.phaseSpeed ?? 0.05; // rad · s⁻¹
  let targetCycleCount = currCycleCount;
  let targetBaseR = currBaseR;
  let targetRotationSpeed = currRotationSpeed;
  let targetResolution = currResolution;

  let reversing = false;
  let rafId: number | null = null;

  /* --------------------------- helpers --------------------------- */

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  function setOptions(opts: OscillatorOptions) {
    if (opts.amplitudePct !== undefined) targetAmp = opts.amplitudePct;
    if (opts.phaseSpeed !== undefined) targetPhaseSpeed = opts.phaseSpeed;
    if (opts.cycleCount !== undefined) targetCycleCount = opts.cycleCount;
    if (opts.baseR !== undefined) targetBaseR = opts.baseR;
    if (opts.rotationSpeed !== undefined)
      targetRotationSpeed = opts.rotationSpeed;
    if (opts.resolution !== undefined) targetResolution = opts.resolution;

    reversing = false;
  }

  function reverse() {
    reversing = true;
    targetBaseR = CONFIG.DEFAULT_BASE_R;
  }

  function cancel() {
    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = null;
  }

  /* -------------------------- animation -------------------------- */

  function step(): void {
    const now = performance.now();
    const dt = Math.max(0.001, (now - lastTime) / 1000); // seconds
    lastTime = now;

    // Smoothly move current → target (frame-rate independent)
    const t = Math.min(1, CONFIG.BLEND_RATE * dt);
    currAmp = lerp(currAmp, reversing ? 0 : targetAmp, t);
    currPhaseSpeed = lerp(currPhaseSpeed, reversing ? 0 : targetPhaseSpeed, t);
    currCycleCount = lerp(currCycleCount, targetCycleCount, t);
    currBaseR = lerp(currBaseR, targetBaseR, t);
    currRotationSpeed = lerp(currRotationSpeed, targetRotationSpeed, t);
    currResolution = Math.round(lerp(currResolution, targetResolution, t));

    // Advance oscillators (time-scaled)
    phase += currPhaseSpeed * dt;
    rot += currRotationSpeed * dt;

    // Build polygon points
    const env = Math.sin(phase);
    const pts: string[] = [];
    const twoPiOverN = (2 * Math.PI) / currResolution;

    for (let i = 0; i < currResolution; i++) {
      const θ0 = i * twoPiOverN;
      const r = currBaseR + currAmp * env * Math.sin(currCycleCount * θ0);
      const θ = θ0 + rot;
      pts.push(
        `${CONFIG.DEFAULT_BASE_R + Math.cos(θ) * r},${CONFIG.DEFAULT_BASE_R + Math.sin(θ) * r}`,
      );
    }

    polygon.setAttribute("points", pts.join(" "));

    /* ---------- finish check ---------- */
    if (
      reversing &&
      currAmp < CONFIG.FINISH_THRESHOLD &&
      currPhaseSpeed < CONFIG.FINISH_THRESHOLD
    ) {
      polygon.setAttribute("points", "");
      cancel();
      onFinish?.();
      return;
    }

    rafId = requestAnimationFrame(step);
  }

  rafId = requestAnimationFrame(step);

  return { setOptions, reverse, cancel };
}

/* ------------------------------------------------------------------ */
/*  Custom cursor component                                           */
/* ------------------------------------------------------------------ */

function CustomCursor(): JSX.Element {
  const { type } = useContext(CustomCursorContext);

  const wrapper = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLDivElement>(null);
  const secondary = useRef<HTMLDivElement>(null);
  const polygonRef = useRef<SVGPolygonElement>(null);

  const animatorRef = useRef<AnimatorHandle | null>(null);
  const posRef = useRef({ x: 0, y: 0, raf: -1 });

  /* ------------------- pointer-move (fast) ------------------- */

  useEffect(() => {
    const move = (e: PointerEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      if (main.current) {
        main.current.style.transform =
          `translate3d(${e.clientX - main.current.clientWidth / 2}px,` +
          `${e.clientY - main.current.clientHeight / 2}px,0)`;
      }
    };

    document.addEventListener("pointermove", move);
    return () => document.removeEventListener("pointermove", move);
  }, []);

  /* ------------- secondary follower spring loop ------------- */

  useEffect(() => {
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };

    const follow = () => {
      posRef.current.raf = requestAnimationFrame(follow);

      vel.x =
        (vel.x + (posRef.current.x - pos.x) * CONFIG.SPRING_K) *
        CONFIG.SPRING_D;
      vel.y =
        (vel.y + (posRef.current.y - pos.y) * CONFIG.SPRING_K) *
        CONFIG.SPRING_D;

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

  /* ---------------- pointer-enter / leave ---------------- */

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

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName !== "A") return;

      addHoverCls();

      const cycles = Number(target.dataset.cycleCount ?? 7);

      if (polygonRef.current) {
        if (!animatorRef.current) {
          animatorRef.current = createOscillatingSvgAnimator(
            polygonRef.current,
            {
              cycleCount: cycles,
              amplitudePct: 8,
              phaseSpeed: 1.4,
              baseR: CONFIG.DEFAULT_BASE_R,
              resolution: 100,
              rotationSpeed: 2.5,
            },
            () => {
              animatorRef.current = null;
              removeHoverCls();
            },
          );
        } else {
          animatorRef.current.setOptions({
            cycleCount: cycles,
            amplitudePct: 8,
            phaseSpeed: 1.4,
            baseR: CONFIG.DEFAULT_BASE_R,
            resolution: 100,
            rotationSpeed: 2.5,
          });
        }
      }
    };

    const onLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName !== "A") return;
      animatorRef.current?.reverse();
    };

    document.addEventListener("pointerenter", onEnter, true);
    document.addEventListener("pointerleave", onLeave, true);

    return () => {
      document.removeEventListener("pointerenter", onEnter, true);
      document.removeEventListener("pointerleave", onLeave, true);
      animatorRef.current?.reverse();
    };
  }, []);

  /* --------------------------- render --------------------------- */

  return (
    <div className={`cursor-wrapper ${type}`} ref={wrapper}>
      <div className="main-cursor" ref={main}>
        <div className="main-cursor-background" />
      </div>

      <div className="secondary-cursor" ref={secondary}>
        <svg
          viewBox="0 0 16 16"
          preserveAspectRatio="none"
          width={16}
          height={16}
          style={{ mixBlendMode: "difference", isolation: "isolate" }}
        >
          <circle
            cx={8}
            cy={8}
            r={8}
            fill="none"
            stroke="#fff"
            style={{ strokeWidth: 1, vectorEffect: "non-scaling-stroke" }}
          />
          <polygon
            ref={polygonRef}
            fill="none"
            stroke="#fff"
            style={{ vectorEffect: "non-scaling-stroke" }}
            // style={{ strokeWidth: 2, vectorEffect: "non-scaling-stroke" }}
          />
        </svg>
      </div>
    </div>
  );
}

export default CustomCursor;
