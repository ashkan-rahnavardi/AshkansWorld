'use client';

function About() {
	return (
		<div
			id="about"
			className="min-h-screen w-screen overflow-hidden flex relative justify-center"
		>
			<div className="relative w-full flex justify-center">
				<div className="section-container mx-auto">
					<div className="timeline alt">
						<div className="bullet"></div>
					</div>

					<div className="text-primaryGray space-y-4 m-4">
						<small>
							About<span className="ml-1">/&gt;</span>
						</small>
					</div>

					<div className="mt-3 mx-4 font-mono text-base text-primary">
						<div className="code" data-line-nr="01">
							<div className="methods">class</div>
							<span className="propname"> Ashkan Rahnavardi </span>
							&#123;
						</div>
						<div className="code" data-line-nr="02">
							<div className="dot">..</div>
							<div className="comment">&#47;&#47; I can, because I do.</div>
						</div>
						<div className="code" data-line-nr="03">
							<div className="dot">..</div>
							<div className="comment">
								&#47;&#47; Only time stands between me and my aspirations.
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
							<span className="prop2">name</span>
							<span className="scope"> = </span>
							<span className="string">&#39;Ashkan Rahnavardi&#39;</span>
						</div>
						<div className="code" data-line-nr="06">
							<div className="dot">....</div>
							<span className="scope">this</span>.
							<span className="prop2">dayOfBirthTimeStamp</span>
							<span className="scope"> = </span>
							<span className="number">808917600</span>
						</div>
						<div className="code" data-line-nr="07">
							<div className="dot">....</div>
							<span className="scope">this</span>.
							<span className="prop2">email</span>
							<span className="scope"> = </span>
							<span className="string">
								&#39;ashkan.rahnavardi@gmail.com&#39;
							</span>
						</div>
						<div className="code" data-line-nr="08">
							<div className="dot">..</div>
							&#125;
						</div>
						<div className="code" data-line-nr="09">
							<div className="dot">..</div>
							<span className="propname">workExperience</span>
							&#40;&#41; &#123;
						</div>
						<div className="code" data-line-nr="10">
							<div className="dot">....</div>
							<span className="methods">return </span>
							&#91;
						</div>
						<div className="code" data-line-nr="11">
							<div className="dot">......</div>
							&#123;
							<span className="string"> &#39;2022-now&#39; </span>
							&#58;
							<span className="string">
								{' '}
								&#39;Full-stack Developer at Freelance&#39;{' '}
							</span>
							&#125;
						</div>
						<div className="code" data-line-nr="12">
							<div className="dot">......</div>
							&#123;
							<span className="string"> &#39;Summer23&#39; </span>
							&#58;
							<span className="string">
								{' '}
								&#39;Traffic Engineer at City of Vancouver&#39;{' '}
							</span>
							&#125;
						</div>
						<div className="code" data-line-nr="13">
							<div className="dot">......</div>
							&#123;
							<span className="string"> &#39;2018-2021&#39; </span>
							&#58;
							<span className="string">
								{' '}
								&#39;Sales Representative at Telus&#39;{' '}
							</span>
							&#125;
						</div>
						<div className="code" data-line-nr="14">
							<div className="dot">....</div>
							&#93;
						</div>
						<div className="code" data-line-nr="15">
							<div className="dot">..</div>
							&#125;
						</div>
						<div className="code" data-line-nr="16">
							<div className="dot">..</div>
							<span className="propname">education</span>
							&#40;&#41; &#123;
						</div>
						<div className="code" data-line-nr="17">
							<div className="dot">....</div>
							<span className="methods">return </span>
							&#91;
						</div>
						<div className="code" data-line-nr="18">
							<div className="dot">......</div>
							&#123;
							<span className="string"> &#39;2021-2023&#39; </span>
							&#58;
							<span className="string">
								{' '}
								&#39;British Columbia Institute of Technology - Professional
								Diploma, Computer Systems Technology&#39;{' '}
							</span>
							&#125;
						</div>
						<div className="code" data-line-nr="19">
							<div className="dot">......</div>
							&#123;
							<span className="string"> &#39;2013-2017&#39; </span>
							&#58;
							<span className="string">
								{' '}
								&#39;University of Victoria - Bachelor of Science, Biology and
								Psychology Dual Major&#39;{' '}
							</span>
							&#125;
						</div>
						<div className="code" data-line-nr="20">
							<div className="dot">....</div>
							&#93;
						</div>
						<div className="code" data-line-nr="21">
							<div className="dot">..</div>
							&#125;
						</div>
						<div className="code" data-line-nr="22">
							<div className="dot">..</div>
							<span className="propname">skills</span>
							&#40;&#41; &#123;
						</div>
						<div className="code" data-line-nr="23">
							<div className="dot">....</div>
							<span className="methods">return </span>
							&#123;
						</div>
						<div className="code" data-line-nr="24">
							<div className="dot">......</div>
							<span className="key">Languages </span>
							&#58; &#91;
							<span className="string"> &#39;Typescript&#39;</span>,
							<span className="string"> &#39;Python&#39;</span>,
							<span className="string"> &#39;C++&#39;</span>,
							<span className="string"> &#39;Java&#39;</span>,
							<span className="string"> &#39;SQL&#39;</span>,
							<span className="string"> &#39;HTML&#39;</span>,
							<span className="string"> &#39;CSS/SCSS&#39;</span>,
							<span className="string"> &#39;Farsi&#39;</span>,
							<span className="string"> &#39;English&#39;</span>
							&#93;,
						</div>
						<div className="code" data-line-nr="25">
							<div className="dot">......</div>
							<span className="key">Frameworks </span>
							&#58; &#91;
							<span className="string"> &#39;React&#39;</span>,
							<span className="string"> &#39;NextJS&#39;</span>,
							<span className="string"> &#39;Vue&#39;</span>,
							<span className="string"> &#39;Flask&#39;</span>,
							<span className="string"> &#39;Bootstrap&#39;</span>,
							<span className="string"> &#39;Tailwind&#39;</span>,
							<span className="string"> &#39;Material UI&#39;</span>,
							<span className="string"> &#39;Express&#39;</span>,
							<span className="string"> &#39;Jest&#39;</span>
							&#93;,
						</div>
						<div className="code" data-line-nr="26">
							<div className="dot">......</div>
							<span className="key">Databases </span>
							&#58; &#91;
							<span className="string"> &#39;MongoDB&#39;</span>,
							<span className="string"> &#39;PostgreSQL&#39;</span>,
							<span className="string"> &#39;MySQL&#39;</span>,
							<span className="string"> &#39;SQL Server&#39;</span>,
							<span className="string"> &#39;Firebase&#39;</span>
							&#93;,
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
