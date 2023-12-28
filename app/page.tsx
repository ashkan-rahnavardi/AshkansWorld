import About from './_components/about';
import Contact from './_components/contact';

import NavBar from './_components/navbar';
import Start from './_components/start';
import Work from './_components/work';
// import CustomCursor from './_components/customCursor';

import CustomCursor from './_components/_cursor/index';

export default function Home() {
	return (
		<main>
			<CustomCursor />
			<NavBar />
			<Start />
			<Work />
			<About />
			<Contact />
		</main>
	);
}
