import Image from 'next/image';
import CustomCursor from '../../../app/_components/_cursor/index';

export default function SotBy() {
	return (
		<>
			<CustomCursor />

			<div id="project-view" className="container-fluid">
				<div className="row ">
					<div className="project-info col-sm-12 col-md-8">
						<div className="project-banner">
							<Image
								src="/sotby/logo.png"
								alt="SotBy-Logo"
								width={300}
								height={150}
							></Image>
						</div>

						<div className="project-banner">
							<Image
								src="/sotby/login.png"
								alt="SotBy-Login"
								width={1200}
								height={700}
							></Image>
						</div>
						<div className="project-banner">
							<Image
								src="/sotby/home.png"
								alt="SotBy-Home"
								width={1200}
								height={700}
							></Image>
						</div>
						<div className="project-banner">
							<Image
								src="/sotby/createUser.png"
								alt="SotBy-CreateUser"
								width={1200}
								height={700}
							></Image>
						</div>
						<div className="project-banner">
							<Image
								src="/sotby/createCourse.png"
								alt="SotBy-CreateCourse"
								width={1200}
								height={700}
							></Image>
						</div>
						<div className="project-banner">
							<Image
								src="/sotby/requestVacation.png"
								alt="SotBy-RequestVacation"
								width={1200}
								height={700}
							></Image>
						</div>
						<div className="project-banner">
							<Image
								src="/sotby/approveVacation.png"
								alt="SotBy-ApproveVacation"
								width={1200}
								height={700}
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
										href="/projects/Plate-Grabber"
										title="Previous"
									>
										←
									</a>
									<a className="text-primaryGray"> / </a>
									<a
										className="text-primaryGray"
										href="/projects/WayFinder"
										title="Next"
									>
										→
									</a>
								</span>
							</p>
							<div className="my-4 mr-16">
								<small className="tags">#PERN, </small>
								<small className="tags">#PostgreSQL, </small>
								<small className="tags">#Express, </small>
								<small className="tags">#React, </small>
								<small className="tags">#Node, </small>
								<small className="tags">#Material UI, </small>

								<small className="tags">#Socket.IO, </small>
								<small className="tags">#JSON Web Tokens, </small>
								<small className="tags">#Bcrypt </small>
							</div>
							<h2 className="projectTitle-summary">SotBy</h2>
							<div className="projectDescription mb-8">
								Helped develop a resource and schedule management application
								for BCIT&#39;s Automotive Department. I was apart of a team of 3
								students and we were given 4 weeks to complete this project.
								Given the short time frame, I am proud of all that we were able
								to accomplish.
							</div>

							<div className="projectDescription mb-8">
								<span className="projectDescription__highlight">
									Features:{' '}
								</span>
								secure login system with specailized user permissions, real-time
								updates via socket.IO, concurrent editing, drag and drop to edit
								schedule, create/request resources for classes, request/approve
								vacations, and more.
							</div>
						</div>
						<div className="flex w-full justify-center mb-8">
							<button className="btn disabled" disabled>
								Demo not Available
							</button>
						</div>

						<div>
							<a
								className="social-link flex items-end"
								href="https://github.com/ashkan-rahnavardi/SotBy"
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
							<div className="divider-line text-primary mt-4">01</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
