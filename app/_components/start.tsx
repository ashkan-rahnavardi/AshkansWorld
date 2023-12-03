'use client';
import { RandomReveal } from 'react-random-reveal';

import dynamic from 'next/dynamic';

// Load TextScramble dynamically only on the client side
const TextScramble = dynamic(() => import('@twistezo/react-text-scramble'), {
	ssr: false,
});

// import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble';
import React, { useEffect, useRef, useState } from 'react';
// import Background from '../../public/background4.jpg';

function Start() {
	const scrambleTexts = [
		'websites',
		'things',

		'mobile apps',
		'web apps',
		'models',
		'UI/UX',
	];

	const [pause, setPause] = useState(false);

	return (
		<header id="start">
			<div className="h-screen w-screen bg-start-page bg-cover relative fixed top-0 left-0 overflow-hidden z-0 flex justify-center items-center">
				<div className="text-primary">
					<h1>Hello</h1>

					{/* Both RandomReveal And TextScramble Cause the same error, I'd rather use TextScramble 
					since it has more features relevant to me.  */}

					{/* <RandomReveal isPlaying duration={2} characters="hello world" /> */}

					<TextScramble
						texts={scrambleTexts}
						letterSpeed={5}
						nextLetterSpeed={100}
						pauseTime={3000}
						paused={pause}
					/>
				</div>
			</div>
		</header>
	);
}

export default Start;
