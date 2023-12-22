function SotByDesc() {
	return (
		<div className="mt-8 font-mono text-base text-primary">
			<div className="code" data-line-nr="01">
				<div className="methods">class</div>
				<span className="propname"> SotBy </span>
				&#123;
			</div>
			<div className="code" data-line-nr="02">
				<div className="dot">..</div>
				<div className="comment">
					&#47;&#47; Resource & Schedule Management App.
				</div>
			</div>
			<div className="code" data-line-nr="03">
				<div className="dot">..</div>
				<div className="comment">
					&#47;&#47; Developed for BCIT&#39;s Automotive Department.
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
					&#39;BCIT&#39;s Automotive Department were using a shared google file
					to manage vacations, resources and schedules for the department. This
					led to a lot of headaches. &#39;
				</span>
				,
			</div>
			<div className="code" data-line-nr="12">
				<div className="dot">......</div>
				<span className="key"> Scope </span>
				&#58;
				<span className="string">
					{' '}
					&#39;Second team given a four week sprint to develop this
					application.&#39;
				</span>
				,
			</div>
			<div className="code" data-line-nr="13">
				<div className="dot">......</div>
				<span className="key"> Objective </span>
				&#58;
				<span className="string">
					{' '}
					&#39;Develop a user friendly Front-End as well as a secure login
					system.&#39;
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
				<span className="string"> &#39;PostgreSQL&#39;</span>,
				<span className="string"> &#39;Express&#39;</span>,
				<span className="string"> &#39;React&#39;</span>,
				<span className="string"> &#39;Node.js&#39;</span>,
				<span className="string"> &#39;Socket.IO&#39;</span>,
				<span className="string"> &#39;Material UI&#39;</span>,
				<span className="string"> &#39;JSON Web Tokens&#39;</span>,
				<span className="string"> &#39;Bcrypt&#39;</span>
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
				<span className="string"> &#39;Secure login system&#39;</span>,
				<span className="string">
					{' '}
					&#39;Simultaneious access for all users&#39;
				</span>
				,
				<span className="string">
					{' '}
					&#39;Real-time updates via Socket.IO&#39;
				</span>
				,<span className="string"> &#39;Detailed view of each course&#39;</span>
				,
				<span className="string">
					{' '}
					&#39;Drag and drop to edit schedule&#39;
				</span>
				,
				<span className="string"> &#39;Request resources for classes&#39;</span>
				,<span className="string"> &#39;Request vacations&#39;</span>,
				<span className="string">
					{' '}
					&#39;Only Admin accounts can approve vacation requests&#39;
				</span>
				,
				<span className="string">
					{' '}
					&#39;Admin accounts can edit all users schedules&#39;
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
	);
}
