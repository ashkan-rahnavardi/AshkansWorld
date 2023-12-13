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
			titleStyles: string;
		};
	}) => {
		const { imageUrl, className, title1, title2, num, titleStyles } = project;
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
				<div
					className={`absolute bottom-0 text-primary inner-element ${titleStyles}`}
				>
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
		titleStyles: '-left-20 w-24 md:w-36',
	};
	const sotBy = {
		imageUrl: '/sotby3.png',
		className: 'sotby',
		title1: 'SotBy',
		title2: '',
		num: '01',
		titleStyles: '-left-20 md:-left-12 w-24 md:w-24',
	};
	const wayFinder = {
		imageUrl: '/wayfinder.png',
		className: 'wayfinder',
		title1: 'Way',
		title2: 'Finder',
		num: '02',
		titleStyles: '-left-20 md:-left-12 w-24 md:w-24',
	};

	return (
		<div
			id="work"
			className="min-h-screen w-screen overflow-hidden flex relative"
		>
			<div className="mx-auto relative w-10/12 md:w-7/12">
				<div className="timeline">
					<div className="bullet"></div>
				</div>

				<div className="text-primaryGray space-y-4 m-4">
					<small>
						Work<span className="ml-1">/&gt;</span>
					</small>
					<h2>Selected full-stack projects...</h2>
				</div>

				<div className="my-20 md:my-16 flex justify-center md:justify-start">
					<div className="flex flex-col space-y-16">
						<ProjectCard project={plateGrabber} />
						<ProjectCard project={sotBy} />
						<ProjectCard project={wayFinder} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Work;
