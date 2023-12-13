'use client';

import useTextScramble from '../_hooks/useScrambleText';

const texts = ['things', 'websites', 'web apps', 'ui/ux', 'tools'] as const;

function Start() {
	const scrambledText = useTextScramble(texts);

	return (
		<header id="start">
			<div className="min-h-screen w-screen bg-start-page bg-cover flex items-center">
				<div className="mx-auto relative w-7/12">
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
							{scrambledText}
						</h1>

						<p className="text-primaryGray">Let me show You...</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Start;
