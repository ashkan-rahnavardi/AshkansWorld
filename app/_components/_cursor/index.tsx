"use client";

import React, { useContext, useEffect, useRef } from "react";
import CustomCursorContext from "./context/CustomCursorContext";
import "./style.css";

const CustomCursor: React.FC = () => {
  const { type } = useContext(CustomCursorContext);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const mainCursor = useRef<HTMLDivElement>(null);
  const cursorWrapper = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleAnchorHover = () => {
      if (cursorWrapper.current) {
        cursorWrapper.current.classList.add("hovering");
      }
      if (mainCursor.current) {
        mainCursor.current.classList.add("hovering");
      }
      if (secondaryCursor.current) {
        secondaryCursor.current.classList.add("hovering");
      }
    };

    const handleAnchorLeave = () => {
      if (cursorWrapper.current) {
        cursorWrapper.current.classList.remove("hovering");
      }
      if (mainCursor.current) {
        mainCursor.current.classList.remove("hovering");
      }
      if (secondaryCursor.current) {
        secondaryCursor.current.classList.remove("hovering");
      }
    };

    const anchorElements = document.querySelectorAll("a");

    anchorElements.forEach((anchor) => {
      anchor.addEventListener("mouseenter", handleAnchorHover);
      anchor.addEventListener("mouseleave", handleAnchorLeave);
    });

    return () => {
      anchorElements.forEach((anchor) => {
        anchor.removeEventListener("mouseenter", handleAnchorHover);
        anchor.removeEventListener("mouseleave", handleAnchorLeave);
      });
    };
  }, [mainCursor, secondaryCursor, cursorWrapper]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - (secondaryCursor.current?.clientWidth || 0) / 2;
      positionRef.current.mouseY =
        mouseY - (secondaryCursor.current?.clientHeight || 0) / 2;

      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${
          mouseX - (mainCursor.current?.clientWidth || 0) / 2
        }px, ${mouseY - (mainCursor.current?.clientHeight || 0) / 2}px, 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mainCursor, secondaryCursor]);

  useEffect(() => {
    // State for the follower’s position & oscillation phase
    const posX = { current: 0 };
    const posY = { current: 0 };
    const phase = { current: 0 };

    // Tweak these to taste:
    const lerpFactor = 1; // how “fast” it follows (0–1)
    const amplitude = 50; // max pixel overshoot
    const phaseSpeed = 30; // how fast the wiggle runs

    const animate = () => {
      // schedule next frame
      positionRef.current.key = requestAnimationFrame(animate);

      // advance the phase
      phase.current += phaseSpeed;

      // vector from follower to real mouse
      const dx = positionRef.current.mouseX - posX.current;
      const dy = positionRef.current.mouseY - posY.current;

      // move a fraction of the way (lerp) plus a sinusoidal offset
      posX.current += dx * lerpFactor + Math.sin(phase.current) * amplitude;
      posY.current += dy * lerpFactor + Math.cos(phase.current) * amplitude;

      // apply it
      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${posX.current}px, ${posY.current}px, 0)`;
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, [secondaryCursor]);

  // useEffect(() => {
  //   // refs to hold our simulated state:
  //   const posX = { current: 0 };
  //   const posY = { current: 0 };
  //   const velX = { current: 0 };
  //   const velY = { current: 0 };
  //
  //   const k = 0.1; // spring stiffness (tweak between 0.05–0.2)
  //   const d = 0.78; // damping factor (0.6–0.95 for more/less bounce)
  //
  //   const animate = () => {
  //     positionRef.current.key = requestAnimationFrame(animate);
  //
  //     // displacement from follower to pointer
  //     const dx = positionRef.current.mouseX - posX.current;
  //     const dy = positionRef.current.mouseY - posY.current;
  //
  //     // Hooke’s law: F = k * x  → here we add to velocity
  //     velX.current += dx * k;
  //     velY.current += dy * k;
  //
  //     // damping:
  //     velX.current *= d;
  //     velY.current *= d;
  //
  //     // integrate velocity into position
  //     posX.current += velX.current;
  //     posY.current += velY.current;
  //
  //     if (secondaryCursor.current) {
  //       secondaryCursor.current.style.transform = `translate3d(${posX.current}px, ${posY.current}px, 0)`;
  //     }
  //   };
  //
  //   animate();
  //   return () => cancelAnimationFrame(positionRef.current.key);
  // }, [secondaryCursor]);

  return (
    <div className={`cursor-wrapper ${type}`} ref={cursorWrapper}>
      <div className="main-cursor " ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
