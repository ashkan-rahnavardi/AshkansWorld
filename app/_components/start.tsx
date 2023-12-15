'use client';

//TO DO: FIX THE QUICK JUMP THAT HAPPENS WHEN SCRAMBLED TEXT IS ON A NEWLINE
//TO DO: MAKE TEXT A BIT BIGGER

import useTextScramble from '../_hooks/useScrambleText';

const texts = ['things', 'websites', 'web apps', 'ui/ux', 'tools'] as const;

function Start() {
	const scrambledText = useTextScramble(texts);

	return (
		<header id="start">
			<div className="min-h-screen w-screen bg-start-page bg-cover flex">
				<div className="relative w-full flex items-center self-center justify-center">
					<div className="section-container mx-auto">
						<div className="timeline">
							<div className="bullet"></div>
						</div>

						<div className="text-primary space-y-4 m-4">
							<small className="text-primaryGray">
								Start<span className="ml-1">/&gt;</span>
							</small>

							<h1>
								Hi, my name is{' '}
								<strong className="text-purple font-extrabold">
									Ashkan Rahnavardi
								</strong>
								<br></br>
							</h1>

							<h1>
								I <em className="font-serif font-normal">design</em> and{' '}
								<span className="font-mono font-bold">develop</span>{' '}
								<br className="newline" />
								<span className="whitespace-nowrap">{scrambledText}</span>
							</h1>

							<p className="text-primaryGray">Let me show You...</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Start;
