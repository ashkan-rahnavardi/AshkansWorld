'use client';

import useTextScramble from '../_hooks/useScrambleText';

const texts = ['things', 'websites', 'web apps', 'ui/ux', 'tools'] as const;

function Start() {
	const scrambledText = useTextScramble(texts);

	return (
		<header id="start">
			<div className="h-screen w-screen bg-start-page bg-cover top-0 left-0 overflow-hidden flex justify-center items-end z-0">
				<div className="flex items-start">
					<div className="timeline mr-4">
						<div className="bullet"></div>
					</div>

					<div className="text-primary text-4xl font-bold space-y-4">
						<small className="text-primaryGray text-lg font-light block-reveal__text">
							Start<span className="ml-1">/&gt;</span>
						</small>

						<h1 className="block-reveal__text">
							Hi, my name is{' '}
							<strong className="text-purple font-extrabold">
								Ashkan Rahnavardi
							</strong>
							<br></br>
						</h1>

						<h1>
							I <em className="font-serif font-normal">design</em> and{' '}
							<span className="font-mono font-bold">develop</span>{' '}
							{scrambledText}
						</h1>

						<p className="text-primaryGray text-2xl font-normal">
							Let me show You...
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Start;
