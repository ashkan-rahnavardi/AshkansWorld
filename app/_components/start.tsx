'use client';

import useTextScramble from '../_hooks/useScrambleText';

const texts = [
	'things',
	'websites',
	'mobile apps',
	'web apps',
	'models',
	'UI/UX',
] as const;

function Start() {
	const scrambledText = useTextScramble(texts, { paused: false });
	return (
		<header id="start">
			<div className="h-screen w-screen bg-start-page bg-cover fixed top-0 left-0 overflow-hidden z-0 flex justify-center items-center">
				<div className="text-primary">
					<h1>
						Hi, my name is <strong>Ashkan Rahnavardi</strong>
						<br></br>
					</h1>
					<h1>I design and develop</h1>
						{scrambledText}
				</div>
			</div>
		</header>
	);
}

export default Start;
