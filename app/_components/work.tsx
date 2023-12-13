'use client';

import Tilt from 'react-parallax-tilt';

function Work() {
	const ParallaxEffect = () => (
		<Tilt className="parallax-effect" perspective={500}>
			<div className="inner-element">
				<div>React</div>

				<div>Parallax Tilt</div>

				<div>👀</div>
			</div>
		</Tilt>
	);

	const ProjectCard = ({
		imageUrl,
		className,
	}: {
		imageUrl: string;
		className: string;
	}) => {
		return (
			// <Tilt>
			<Tilt
				perspective={500}
				glareEnable={true}
				glareMaxOpacity={0.45}
				scale={1.02}
				className={'w-10/12 h-56 relative z-10 parallax-effect ' + className}
				style={{
					backgroundImage: `url(${imageUrl})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute bottom-0 -left-16 text-primary w-36 inner-element">
					<h3>Plate</h3>
					<h3>Grabber</h3>
					<div className="w-full h-1 bg-primary my-2"></div>
					<p className="text-primaryGray font-mono text-lg">00</p>
					<p className="text-primaryGray font-mono text-lg">→</p>
				</div>
			</Tilt>
			// </Tilt>
		);
	};

	return (
		<div id="work" className="min-h-screen w-screen overflow-hidden flex ">
			<div className="mx-auto relative w-7/12">
				<div className="timeline">
					<div className="bullet"></div>
				</div>

				<div className="text-primaryGray space-y-4 m-4">
					<small>
						Work<span className="ml-1">/&gt;</span>
					</small>
					<h2>Selected full-stack projects...</h2>
				</div>

				<div className="mx-4 my-8">
					<ProjectCard imageUrl="/bc-plate2.png" className="-left-14" />
					{/* <ParallaxEffect /> */}
				</div>
			</div>
		</div>
	);
}

export default Work;
