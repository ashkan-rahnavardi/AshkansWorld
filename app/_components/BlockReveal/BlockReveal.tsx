"use client";

import { ReactNode, useEffect, useState } from "react";
import "./animation.css";

export interface BlockRevealProps {
  children: ReactNode;
  active?: boolean;
  variant?: "purple" | "white";
  className?: string;
  textClassName?: string;
  autoActivate?: boolean;
  delay?: number;
}

export function BlockReveal({
  children,
  active = false,
  variant = "purple",
  className = "",
  textClassName = "",
  autoActivate = false,
  delay = 0,
}: BlockRevealProps): JSX.Element {
  const [isActive, setIsActive] = useState(autoActivate ? false : active);

  useEffect(() => {
    if (autoActivate && !isActive) {
      const timer = setTimeout(() => {
        setIsActive(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [autoActivate, delay, isActive]);

  useEffect(() => {
    if (!autoActivate) {
      setIsActive(active);
    }
  }, [active, autoActivate]);

  const containerClass =
    `block-reveal ${isActive ? "block-reveal--active" : ""} ${className}`.trim();
  const blockClass =
    `block-reveal__block ${variant === "white" ? "white" : ""}`.trim();
  const textClass = `block-reveal__text ${textClassName}`.trim();

  return (
    <div className={containerClass}>
      <span className={blockClass}></span>
      <div className={textClass}>{children}</div>
    </div>
  );
}
