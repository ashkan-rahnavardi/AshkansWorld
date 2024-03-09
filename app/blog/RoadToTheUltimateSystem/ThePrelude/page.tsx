import CustomCursor from '@/app/_components/_cursor';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function ThePrelude() {
	return (
		<div id="blog" className={inter.className}>
			<CustomCursor />
			<div className="relative w-full items-center justify-center flex">
				<div className="mx-auto col-sm-7 col-md-7 col-10">
					<span className="block text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-teal-500 ">
						<h1>Road To The Ultimate System</h1>
						<h1>- The Prelude -</h1>
					</span>

					<br />
					<p>
						An overarching theme I want to promote throughout this series and
						others like it is keeping an open mind, and considering different
						options for different use cases. There&#39;s no cookie cutter
						&#39;Ultimate System&#39;, instead it has to be tailored to meet
						your own personal needs, and dynamic enough to grow with them. My
						intention with this series is to document my journey to the ultimate
						system, and the things I learn along the way, so it can hopefully
						help out someone else on a similar path.
					</p>
					<p>
						Having said that, it&#39;s time to cut the fat. If you heavily
						depend on proprietary software for your work flow like Adobe
						Creative Suite, or if you&#39;re a gamer who deeply cares about
						min-maxing your gaming performance, then I&#39;m afraid this is the
						end of your journey 👋, because we&#39;ve got a one way ticket to
						the land of ✨
						<strong className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
							Linux
						</strong>
						✨.
					</p>
					<p>
						<em className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
							Note: If you&#39;re okay with using open source alternatives, like{' '}
							<Link href="https://www.gimp.org/">GIMP</Link> instead of
							Photoshop, or taking a performance hit and running proprietary
							software in a virtual windows environment, then feel free to stick
							around!
						</em>
					</p>
					<br />
					<h2 className=" block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
						Why Linux?
					</h2>
					<p>
						As a student of Socrates, Plato wrote &#39;The Republic&#39;
						sometime around ~375 BC. Little did he know that, 2400 years later
						someone would use his work to justify the merits of Linux as the
						ultimate operating system. Plato&#39;s exploration of ideals —
						justice, the nature of a well-ordered society, and the role of
						individuals within it — culminates in his vision of an ideal society
						structured around the pursuit of the common good and the elevation
						of knowledge. His vision is echoed in the characteristics which make
						Linux great: its flexibility, community governance, ethos of
						contribution, and open source nature. It&#39;s safe to say if Plato
						was alive today he&#39;d be using Linux.
					</p>
					<p>
						I&#39;m not done with the Plato references yet, in fact I&#39;ve
						barely scratched the surface... &#39;Allegory of the cave&#39;,
						probably the most famous section of &#39;The Republic&#39;,
						describes a group of prisoners who have lived all their lives
						chained to a wall inside a cave. Only able to see shadows of objects
						cast to the wall in-front of them, they believe the shadows to be
						reality. Windows, akin to the cave, represents a restricted
						environment where its prisoners are fed a reality of spyware, forced
						updates, a broken registry system, and unstable garbage layered on
						garbage which is itching to fall apart.
					</p>
					<p>
						When a prisoner is finally free&#39;d and allowed to see the true
						reality of the outside world, an open computing environment where
						you are free to do{' '}
						<em className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
							anything
						</em>{' '}
						you want, he returns to the cave to enlighten the other prisoners.
						At his dismay, he is met with hostility and disbelief, as the
						prisoners are not able to comprehend the reality of the world he
						describes. The choice is yours, you can remain a prisoner living in
						the shadows, ignorant to the reality and beauty of the real world,
						or you can move towards the light and join me on a journey towards
						enlightenment.
					</p>
					<div className="my-4">
						<Image
							src="/blog/platos-cave.png"
							alt="Windows vs Linux users"
							width={500}
							height={300}
							style={{ width: '100%', height: 'auto' }}
						/>
						<p className=" inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
							<em>Figure 1: Windows vs Linux users</em>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
