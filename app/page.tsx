import About from './_components/about';
import Contact from './_components/contact';

import NavBar from './_components/navbar';
import Start from './_components/start';
import Work from './_components/work';

export default function Home() {
	return (
		<main>
			<NavBar />
			<Start />
			<Work />
			<About />
			<Contact />
		</main>
	);
}
