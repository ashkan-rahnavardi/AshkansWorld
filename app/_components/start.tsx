'use client';

// normal import
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble';

// dynamically import local version of TextScramble with ssr: false
//
// import dynamic from 'next/dynamic';
// import { ScrambleTexts } from '../_utils/types';
// const TextScramble = dynamic(() => import('./scramble'), {
// 	ssr: false,
// });

// dynamically import global version of TextScramble with ssr: false
//
// import dynamic from 'next/dynamic';
// import { ScrambleTexts } from '../_utils/types';
// const TextScramble = dynamic(() => import('@twistezo/react-text-scramble'), {
// 	ssr: false,
// });

import React, { useEffect, useRef, useState } from 'react';

import { default as NoSSRWrapper } from './noSSRWrapper';

const texts: ScrambleTexts = [
	'things',
	'websites',
	'mobile apps',
	'web apps',
	'models',
	'UI/UX',
];

function Start() {
	const [pause, setPause] = useState(false);
	return (
		<header id="start">
			<div className="h-screen w-screen bg-start-page bg-cover relative fixed top-0 left-0 overflow-hidden z-0 flex justify-center items-center">
				<div className="text-primary">
					<h1>
						Hi, my name is <strong>Ashkan Rahnavardi</strong>
						<br></br>
					</h1>
					<h1>I design and develop</h1>
					<NoSSRWrapper>
						<TextScramble
							texts={texts}
							letterSpeed={5}
							nextLetterSpeed={100}
							pauseTime={1500}
							paused={pause}
						/>
					</NoSSRWrapper>
				</div>
			</div>
		</header>
	);
}

export default Start;
