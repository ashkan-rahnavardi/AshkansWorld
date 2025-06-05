"use client";

import { useEffect, useState } from "react";

import useTextScramble from "../_hooks/useScrambleText";

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

            <div
              className={
                reveal[1] ? "block-reveal block-reveal--active" : "block-reveal"
              }
            >
              <span className="block-reveal__block white"></span>
              <small className="section-title block-reveal__text section-start">
                Start<span className="ml-1">/&gt;</span>
              </small>
            </div>
            <br />

            <div className="block-reveal block-reveal--active">
              <span className="block-reveal__block"></span>
              <h1 className="block-reveal__text subtitle mb-0">
                Hi, my name is{" "}
                <strong className="text-purple font-extrabold">
                  Ashkan Rahnavardi
                </strong>
                <br></br>
              </h1>
            </div>
            <br />

            <div
              className={
                reveal[0] ? "block-reveal block-reveal--active" : "block-reveal"
              }
            >
              <span className="block-reveal__block"></span>
              <h1 className="block-reveal__text subtitle mt-0 ws-nowrap">
                I <em className="font-serif font-normal">design</em> and{" "}
                <span className="font-mono font-bold">develop</span>{" "}
                <br className="newline" />
                <span className="scramble">{scrambledText}</span>
              </h1>
            </div>
            <br />

            <div
              className={
                reveal[2] ? "block-reveal block-reveal--active" : "block-reveal"
              }
            >
              <span className="block-reveal__block white"></span>
              <p className="text-primaryGray block-reveal__text section-showyou">
                Let me show you...
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Start;
