import CustomCursor from './_components/_cursor/index';

export default function Custom404() {
	return (
		<>
			<CustomCursor />
			<div className="min-h-screen min-w-screen bg-darkPurple flex justify-center items-center">
				<div className="flex flex-col space-y-4">
					<h1>404 Not Found</h1>
					<a href="/" className="btn">
						Go back home
					</a>
				</div>
			</div>
		</>
	);
}
