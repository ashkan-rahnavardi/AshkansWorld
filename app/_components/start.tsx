"use client";

import { useEffect, useState } from "react";

import useTextScramble from "../_hooks/useScrambleText";
import { BlockReveal } from "./BlockReveal";

const texts = ["things", "websites", "web apps", "ui/ux", "tools"] as const;

function Start() {
  const [reveal, setReveal] = useState([false, false, false]);
  const [revealIndex, setRevealIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedReveals = [...reveal];
      updatedReveals[revealIndex] = true;
      setReveal(updatedReveals);

      if (revealIndex < 2) {
        setRevealIndex(revealIndex + 1);
      }
    }, 500); // 0.8 seconds in milliseconds

    // Clear the timer when the component unmounts or when all booleans are set to true
    return () => {
      clearTimeout(timer);
    };
  }, [revealIndex, reveal]);
  const scrambledText = useTextScramble(texts);

  return (
    <header id="start">
      <div className="min-h-screen w-screen bg-start-page bg-cover flex relative container-fluid">
        <div className="relative row w-full flex flex-initial items-center self-center justify-center">
          <div className="mx-auto col-sm-7 col-md-7 col-9">
            <div className="timeline">
              <div className="bullet"></div>
            </div>

            <BlockReveal active={reveal[1]} variant="white">
              <small className="text_timeline-title">
                Start<span className="ml-1">/&gt;</span>
              </small>
            </BlockReveal>

            <BlockReveal active={true}>
              <h1 className="text_start_main">
                Hi, my name is{" "}
                <strong className="text-purple font-black">
                  Ashkan Rahnavardi
                </strong>
                <br></br>
              </h1>
            </BlockReveal>

            <BlockReveal active={reveal[0]} className="ws-nowrap">
              <h1 className="text_start_main">
                I <em className="font-serif font-normal">design</em> and{" "}
                <span className="font-mono font-bold">develop</span>{" "}
                <br className="newline" />
                <span className="scramble">{scrambledText}</span>
              </h1>
            </BlockReveal>

            <BlockReveal active={reveal[2]} variant="white">
              <p className="text_start_sub">Let me show you...</p>
            </BlockReveal>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Start;
