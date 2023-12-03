'use client';

// import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble';
import dynamic from 'next/dynamic';
import { ScrambleTexts } from '../_utils/types';
const TextScramble = dynamic(() => import('./scramble'), {
	ssr: false,
});

import React, { useState } from 'react';
// import './Example.scss';

const scrambleTexts: ScrambleTexts = [
	'websites',
	'things',
	'mobile apps',
	'web apps',
	'models',
	'UI/UX',
];

const Example: React.FC = () => {
	const [pause, setPause] = useState(false);

	return (
		<>
			{/* <div className="Example"> */}
			<div className="flex text-3xl mb-4 font-trebuchet">
				{/* <span className="Example__blinker">_</span> */}
				<span className="blinker animate-blink">_</span>
				<TextScramble
					texts={scrambleTexts}
					letterSpeed={5}
					nextLetterSpeed={100}
					pauseTime={3000}
					paused={pause}
				/>
			</div>

			<button onClick={() => void setPause(!pause)}>
				{pause ? 'Resume' : 'Pause'}
			</button>
		</>
	);
};

export default Example;
