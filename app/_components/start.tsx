'use client';

import useTextScramble from '../_hooks/useScrambleText';

const texts = ['things', 'websites', 'web apps', 'ui/ux', 'tools'] as const;

function Start() {
	const scrambledText = useTextScramble(texts);

	return (
		<header id="start">
			{/* <div className="min-h-screen w-screen bg-start-page bg-cover top-0 left-0 overflow-hidden flex justify-center items-end z-0"> */}
			<div className="min-h-screen w-screen bg-start-page bg-cover relative overflow-hidden flex flex-wrap justify-between items-center">
				<div className="flex flex-wrap -mx-4 self-center w-full items-center content-center">
					{/* <div className="flex items-start"> */}

					<div className="mx-auto sm:col-span-7 md:col-span-7 col-span-9 relative">
						<div className="timeline">
							<div className="bullet"></div>
						</div>

						<div className="text-primary text-4xl font-bold space-y-4 mx-4">
							<small className="text-primaryGray text-lg font-light ">
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

							<p className="text-primaryGray text-2xl font-normal">
								Let me show You...
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Start;
