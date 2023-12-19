import Image from 'next/image';

export default function WayFinder() {
	return (
		<div id="project-view" className="container-fluid">
			<div className="row">
				<div className="project-info col-sm-12 col-md-8">
					<div className="project-banner">
						<Image
							src="/WayFinderLogo.png"
							alt="WayFinder-Logo"
							width={300}
							height={150}
						></Image>
					</div>

					<div className="mt-8 font-mono text-base text-primary">
						<div className="code" data-line-nr="01">
							<div className="methods">class</div>
							<span className="propname"> WayFinder </span>
							&#123;
						</div>
						<div className="code" data-line-nr="02">
							<div className="dot">..</div>
							<div className="comment">
								&#47;&#47; Prototype Navigation App.
							</div>
						</div>
						<div className="code" data-line-nr="03">
							<div className="dot">..</div>
							<div className="comment">
								&#47;&#47; Developed for BCIT&#39;s Burnaby Campus.
							</div>
						</div>
						<div className="code" data-line-nr="04">
							<div className="dot">..</div>
							<div className="methods">constructor</div>
							&#40;&#41; &#123;
						</div>
						<div className="code" data-line-nr="05">
							<div className="dot">....</div>
							<span className="scope">this</span>.
							<span className="prop2">groupProject</span>
							<span className="scope"> = </span>
							<span className="boolean">true</span>
						</div>
						<div className="code" data-line-nr="06">
							<div className="dot">....</div>
							<span className="scope">this</span>.
							<span className="prop2">teamSize</span>
							<span className="scope"> = </span>
							<span className="number">3</span>
						</div>
						<div className="code" data-line-nr="07">
							<div className="dot">....</div>
							<span className="scope">this</span>.
							<span className="prop2">totalTime</span>
							<span className="scope"> = </span>
							<span className="string">&#39;One Month&#39;</span>
						</div>
						<div className="code" data-line-nr="08">
							<div className="dot">..</div>
							&#125;
						</div>
						<div className="code" data-line-nr="09">
							<div className="dot">..</div>
							<span className="propname">overview</span>
							&#40;&#41; &#123;
						</div>
						<div className="code" data-line-nr="10">
							<div className="dot">....</div>
							<span className="methods">return </span>
							&#123;
						</div>
						<div className="code" data-line-nr="11">
							<div className="dot">......</div>
							<span className="key"> Context </span>
							&#58;
							<span className="string">
								{' '}
								&#39;Google maps does not work for footpaths so it is difficult
								for new students and faculty to navigate the campus.&#39;
							</span>
							,
						</div>
						<div className="code" data-line-nr="12">
							<div className="dot">......</div>
							<span className="key"> Scope </span>
							&#58;
							<span className="string">
								{' '}
								&#39;Given four weeks to develop a functional prototype
								app.&#39;
							</span>
							,
						</div>
						<div className="code" data-line-nr="13">
							<div className="dot">......</div>
							<span className="key"> Objective </span>
							&#58;
							<span className="string">
								{' '}
								&#39;Create a MVP navigation app for the BCIT Burnaby
								Campus.&#39;
							</span>
							,
						</div>
						<div className="code" data-line-nr="14">
							<div className="dot">....</div>
							&#125;
						</div>
						<div className="code" data-line-nr="15">
							<div className="dot">..</div>
							&#125;
						</div>
						<div className="code" data-line-nr="16">
							<div className="dot">..</div>
							<span className="propname">techUsed</span>
							&#40;&#41; &#123;
						</div>
						<div className="code" data-line-nr="17">
							<div className="dot">....</div>
							<span className="methods">return </span>
							&#91;
						</div>

						<div className="code" data-line-nr="18">
							<div className="dot">......</div>
							<span className="string"> &#39;React&#39;</span>,
							<span className="string"> &#39;Google Maps API&#39;</span>,
							<span className="string"> &#39;Python&#39;</span>,
							<span className="string"> &#39;Bootstrap&#39;</span>,
							<span className="string"> &#39;nGraph&#39;</span>,
							<span className="string"> &#39;Material UI&#39;</span>
						</div>
						<div className="code" data-line-nr="19">
							<div className="dot">....</div>
							&#93;
						</div>
						<div className="code" data-line-nr="20">
							<div className="dot">..</div>
							&#125;
						</div>
						<div className="code" data-line-nr="21">
							<div className="dot">..</div>
							<span className="propname">features</span>
							&#40;&#41; &#123;
						</div>
						<div className="code" data-line-nr="22">
							<div className="dot">....</div>
							<span className="methods">return </span>
							&#91;
						</div>

						<div className="code" data-line-nr="23">
							<div className="dot">......</div>
							<span className="string">
								{' '}
								&#39;Auto-complete search bar for buildings and amenities&#39;
							</span>
							,<span className="string"> &#39;Geolocation&#39;</span>,
							<span className="string">
								{' '}
								&#39;Color coordinated map markers&#39;
							</span>
							,
							<span className="string">
								{' '}
								&#39;Building/Amenity photo and description&#39;
							</span>
							,
							<span className="string">
								{' '}
								&#39;Familiar UX/UI to google maps&#39;
							</span>
						</div>
						<div className="code" data-line-nr="24">
							<div className="dot">....</div>
							&#93;
						</div>
						<div className="code" data-line-nr="25">
							<div className="dot">..</div>
							&#125;
						</div>
						<div className="code" data-line-nr="26">
							&#125;
						</div>
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
									title="Previous"
								>
									←
								</a>
							</span>
						</p>
						<div className="my-4">
							<small className="tags">#Python, </small>
							<small className="tags">#Google Maps API, </small>
							<small className="tags">#Bootstrap, </small>
							<small className="tags">#nGraph </small>
						</div>
						<h2 className="projectTitle-summary">WayFinder</h2>
						<div className="projectDescription mb-8">
							Helped develop a prototype navigation app for BCIT&#39;s Burnaby
							Campus. We developed the UX/UI of the app to have a similar feel
							to google maps. This app was used to successfuly secure funding
							for commerical development.
						</div>
						<button className="btn">Demo</button>
					</div>
					<div className="divider-line text-primary">02</div>
				</div>
			</div>
		</div>
	);
}
