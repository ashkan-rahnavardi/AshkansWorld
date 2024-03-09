import CustomCursor from '@/app/_components/_cursor';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function ThePrelude() {
	return (
		<div id="blog" className={inter.className}>
			<CustomCursor />

			<div className="flex p-8">
				<div className="relative row w-full items-center justify-center">
					<div className="text-center">
						{/* <div className="text-center "> */}
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-teal-500 ">
							<h1>Road To The Ultimate System</h1>
							<h1>- The Prelude -</h1>
						</span>
						{/* </div> */}
						<br />
						<p>
							An overarching theme I want to promote throughout this series and
							others like it is keeping an open mind, and considering different
							options for different use cases. There's no cookie cutter
							'Ultimate System', instead it has to be tailored to meet your own
							personal needs, and dynamic enough to grow with them. My intention
							with this series is to document my journey to the ultimate system,
							and the things I learn along the way, so it can hopefully help out
							someone else on a similar path.
						</p>

						<br />
						<p>
							Having said that, it's time to cut the fat. If you heavily depend
							on proprietary software for your work flow like Adobe Creative
							Suite, or if you're a gamer who deeply cares about min-maxing your
							gaming performance, then I'm afraid this is the end of your
							journey 👋, because we've got a one way ticket to the land of ✨
							<strong>Linux</strong>✨.
						</p>

						<p>
							<em>
								Note: If you're okay with using open source alternatives, like{' '}
								<Link href="https://www.gimp.org/">GIMP</Link> instead of
								Photoshop, or taking a performance hit and running proprietary
								software in a virtual windows environment, then feel free to
								stick around!
							</em>
						</p>

						<h2>Why Linux?</h2>

						<p>
							As a student of Socrates, Plato wrote 'The Republic' sometime
							around ~375 BC. Little did he know that, 2400 years later someone
							would use his work to justify the merits of Linux as the ultimate
							operating system...
						</p>

						{/* Your content continues here */}

						{/* For images, ensure you have them in your public folder or use an external URL. Adjust the width and height accordingly. */}
						<div className="my-4">
							<Image
								src="/blog/platos-cave.png"
								alt="Windows vs Linux users"
								width={500}
								height={300}
							/>
							<p className="text-center">Figure 1: Windows vs Linux users</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
