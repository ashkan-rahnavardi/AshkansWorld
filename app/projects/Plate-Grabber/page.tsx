import Image from 'next/image';

export default function PlateGrabber() {
	return (
		<div id="project-view" className="container-fluid">
			<div className="row">
				<div className="project-info col-sm-12 col-md-8">
					<div className="project-banner">
						<Image
							src="/plategrabber/logo.png"
							alt="PlateGrabber-Logo"
							width={300}
							height={150}
						></Image>
					</div>

					<div className="project-banner">
						<Image
							src="/plategrabber/form.jpg"
							alt="PlateGrabber-Form"
							width={1200}
							height={2643}
						></Image>
					</div>
					<div className="project-banner">
						<Image
							src="/plategrabber/camera.jpg"
							alt="PlateGrabber-Form"
							width={1200}
							height={2643}
						></Image>
					</div>
					<div className="project-banner">
						<Image
							src="/plategrabber/saved.jpg"
							alt="PlateGrabber-Form"
							width={1200}
							height={2643}
						></Image>
					</div>
				</div>
				<div className="bd-sidebar col-sm-12 col-md-4">
					<div>
						<p className="mt-0 mb-8">
							<a className="goBack__button" href="/" title="Go back home">
								←
							</a>
							<span className="pull-right">
								<a
									className="text-primaryGray"
									href="/projects/SotBy"
									title="Next"
								>
									→
								</a>
							</span>
						</p>
						<div className="my-4">
							<small className="tags">#Firebase, </small>
							<small className="tags">#NextJS, </small>
							<small className="tags">#TailWind, </small>
							<small className="tags">#Typescript, </small>
							<small className="tags">#Web App, </small>
							<small className="tags">#Jest, </small>
							<small className="tags">#AWS </small>
						</div>
						<h2 className="projectTitle-summary">Plate Grabber</h2>
						<div className="projectDescription mb-8">
							Solely designed and developed an innovative application for the
							Traffic Department in the City of Vancouver. This electronic
							solution serves as a progressive alternative to traditional paper
							forms, enabling users to effortlessly capture license plate
							information through photos rather than manual transcription. The
							application is presently undergoing pilot testing, marking a
							pivotal step toward its full implementation.
						</div>
						<div className="projectDescription mb-8">
							<span className="projectDescription__highlight">Features: </span>
							Text extraction from images, Save and download forms, Autofill
							date, Geolocation &#40;in development&#41;, Secure login system
							&#40;in development&#41;
						</div>
					</div>
					<div className="flex w-full justify-center mb-8">
						<button className="btn" disabled>
							Demo
						</button>
					</div>
					<div>
						<a
							className="social-link flex items-end"
							href="https://github.com/ashkan-rahnavardi"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								width="36px"
								height="36px"
								viewBox="0 0 64 64"
							>
								<title>Github</title>
								<desc>A solid styled icon from Orion Icon Library.</desc>
								<path
									data-name="layer2"
									d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
									fill="#5918df"
								></path>
								<path
									data-name="layer1"
									d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
									fill="#5918df"
								></path>
							</svg>
							<span className="ml-2">View on Github</span>
						</a>
						<div className="divider-line text-primary mt-4">00</div>
					</div>
				</div>
			</div>
		</div>
	);
}
