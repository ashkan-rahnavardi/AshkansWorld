'use client';

import Tilt from 'react-parallax-tilt';

function Work() {
	const ProjectCard = ({
		project,
	}: {
		project: {
			imageUrl: string;
			className: string;
			title1: string;
			title2: string;
			num: string;
		};
	}) => {
		const { imageUrl, className, title1, title2, num } = project;
		return (
			<Tilt
				perspective={500}
				glareEnable={true}
				glareMaxOpacity={0.45}
				scale={1.02}
				className={`relative z-10 parallax-effect ${className}`}
				style={{
					backgroundImage: `url(${imageUrl})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute bottom-0 text-primary inner-element -left-20 md:-left-16 w-24">
					<h3>{title1}</h3>
					<h3>{title2}</h3>
					<div className="h-1 bg-primary my-2"></div>
					<p className="text-primaryGray font-mono text-lg">{num}</p>
					<p className="text-primaryGray font-mono text-lg">→</p>
				</div>
			</Tilt>
		);
	};

	const plateGrabber = {
		imageUrl: '/bc-plate2.png',
		className: 'plate',
		title1: 'Plate',
		title2: 'Grabber',
		num: '00',
	};
	const sotBy = {
		imageUrl: '/sotby3.png',
		className: 'sotby',
		title1: 'SotBy',
		title2: '',
		num: '01',
	};
	const wayFinder = {
		imageUrl: '/wayfinder.png',
		className: 'wayfinder',
		title1: 'Way',
		title2: 'Finder',
		num: '02',
	};

	return (
		<div id="work" className="w-screen relative">
			<div className="relative w-full flex justify-center">
				<div className="section-container mx-auto">
					<div className="timeline alt">
						<div className="bullet"></div>
					</div>

					<div className="text-primaryGray space-y-4 m-4">
						<small>
							Work<span className="ml-1">/&gt;</span>
						</small>
						<h2>Selected full-stack projects...</h2>
					</div>
				</div>
			</div>
			<div className="w-full mb-3 mt-3 pt-3 row">
				<div className="plate-container">
					<ProjectCard project={plateGrabber} />
				</div>
				<div className="sotby-container">
					<ProjectCard project={sotBy} />
				</div>
				<div className="wayfinder-container">
					<ProjectCard project={wayFinder} />
				</div>
			</div>
		</div>
	);
}

export default Work;
