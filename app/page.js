import Image from 'next/image';
import { AiFillBook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Headshot from '/public/HeadshotChristmasEdit.png';
import WebDev from '/public/web-programming.png';

export default function Home() {
	return (
		<div className={'mx-auto h-full w-full min-h-screen'}>
			<div id={"bggrad"} className="absolute top-0 z-[-1] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,100,215,0.3),rgba(255,255,255,0))]" style={{minHeight: '200vh'}}></div>
			<main className={'px-10 md:px-40 lg:px-40'}>
				<section className={'min-h-screen'}>
					<div className={'text-4xl fixed bottom-20 left-4 flex flex-col gap-8 items-start py-3 text-gray-400 opacity-80 ml-2'}>
						<a
							href={"https://github.com/Noway-code"} target="_blank" rel="noopener noreferrer">
							<AiFillGithub />
						</a>
						<a
							href={"https://www.linkedin.com/in/camilo-alvarez-velez/"} target="_blank" rel="noopener noreferrer">
							<AiFillLinkedin />
						</a>
						<a
							href={"https://app.thestorygraph.com/profile/nowayreads"} target="_blank" rel="noopener noreferrer">
							<AiFillBook />
						</a>
					</div>
					<div className={'flex flex-col md:flex-row items-center'}>
						<div className={'text-center pt-10 pl-20 md:mt-10 md:pr-8'}>
							<h1 className={'text-4xl text-white py-2 font-bold text-center max-w-lg mx-auto'}>Hi, I&apos;m Camilo Alvarez-Velez </h1>
							<p className={'text-xl py-2 text-center text-gray-500 max-w-lg mx-auto'}>
								I&apos;m a developer based in Orlando, FL. I love to create and build things that live on the internet.
							</p>
							<p> Here are a few technologies I&apos;ve used recently:</p>
							<div className={"flex flex-wrap max-w-xl"}>
								<ul className={"*:inline-flex *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-3 *:py-1 text-sky-300 *:border-sky-500/15 *:bg-sky-500/10 *:space-x-2"}>
									<li className="m-1">Node.js</li>
									<li className="m-1">Express.js</li>
									<li className="m-1">React</li>
									<li className="m-1">React Native</li>
									<li className="m-1">TailwindCSS</li>
									<li className="m-1">HTML</li>
									<li className="m-1">CSS</li>
								</ul>
							</div>

						</div>
						<div className={"relative mx-auto"}>
							<a href="https://www.linkedin.com/in/camilo-alvarez-velez/" target="_blank" rel="noopener noreferrer">
								<div className={'relative mx-auto rounded-full lg:w-80 lg:h-80 mt-10 overflow-hidden md:h-60 md:w-60 group hover:scale-110 duration-300  '}>
									<div
										className={'w-full h-full absolute bg-blue-900 opacity-50 transition-opacity duration-700 group-hover:opacity-0 z-10'}
										style={{ aspectRatio: '1/1' }} // Set aspect ratio to match the image
									></div>
									<Image src={Headshot} alt={'Headshot of Camilo Alvarez-Velez'} className={'rounded-full'} layout={'fill'} objectFit={'cover'} />
								</div>
							</a>
						</div>
					</div>
				</section>
				<section style={{backgroundColor: '#1247c4'}} className={"z-[-3]"}>
					<div className={'flex flex-col md:flex-row items-center'}>
						<div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white">
							<img className="w-full" src="/card-top.jpg" alt="Sunset in the mountains"/>
							<div className="px-6 py-4">
								<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
								<p className="text-gray-700 text-base">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
								</p>
							</div>
							<div className="px-6 pt-4 pb-2">
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
							</div>
						</div>
						<div className={"flex-row lg:flex gap-10"}>
							<div className={"text-center shadow-lg p-10 rounded-xl my-10 flex-1"}>
								<Image src={Headshot} width={100} height={100} alt={"Design Icon"}/>
								<h3 className={"text-lg font-medium pt-8 pb-2 "}>Designs</h3>
								<p className="text-gray-800 py-1">Elegant code for your needs</p>
								<h4 className={"py-4 text-teal-600"}>What I use: </h4>
								<ul className={"*:inline-block *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-3 *:py-1 text-sky-300 *:border-sky-500/15 *:bg-sky-500/10 *:space-x-2"}>
									<li className="m-1">MySQL</li>
									<li className="m-1">MongoDB</li>
									<li className="m-1">Next.js</li>
									<li className="m-1">Node.js</li>
									<li className="m-1">Express.js</li>
									<li className="m-1">React</li>
									<li className="m-1">React Native</li>
									<li className="m-1">TailwindCSS</li>
									<li className="m-1">HTML</li>
									<li className="m-1">CSS</li>
								</ul>

							</div>

							<div className={"bg-sky-500/[.06] opacity-90 text-center shadow-lg p-10 rounded-xl my-10 flex-1"}>
								<Image src={Headshot} width={100} height={100} alt={"Consulting Icon"}/>
								<h3 className={"text-lg font-medium pt-8 pb-2"}>Designs</h3>
								<p className="text-gray-200 py-1">Elegant code for your needs</p>
								<h4 className={"py-4 text-teal-600"}>What I use: </h4>
								<p className="text-gray-200 py-1">C, Java, JS</p>
								<p className="text-gray-200 py-1">MySQL, MongoDB</p>
								<p className="text-gray-200 py-1">Next.js, Node.js, Express.js</p>
								<p className="text-gray-200 py-1">React, React Native, TailwindCSS, HTML, CSS</p>
							</div>
							<div className={"bg-sky-500/[.06] opacity-90 text-center shadow-lg p-10 rounded-xl my-10 flex-1"}>
								<Image src={Headshot} width={100} height={100} alt={"Consulting Icon"}/>
								<h3 className={"text-lg font-medium pt-8 pb-2"}>Designs</h3>
								<p className="text-gray-200 py-1">Elegant code for your needs</p>
								<h4 className={"py-4 text-teal-600"}>What I use: </h4>
								<p className="text-gray-200 py-1">C, Java, JS</p>
								<p className="text-gray-200 py-1">MySQL, MongoDB</p>
								<p className="text-gray-200 py-1">Next.js, Node.js, Express.js</p>
								<p className="text-gray-200 py-1">React, React Native, TailwindCSS, HTML, CSS</p>
							</div>
						</div>
					</div>

				</section>
				<section className={"pb-4"}>
					<h2 className="text-3xl font-bold text-white mb-6">My Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Project 1 */}
						<div className="hover:shadow-lg transition duration-300">
							<a href="/project1">
								<Image src={WebDev} alt="Project 1" className="rounded-md" width={100} height={60} />
							</a>
							<p className="text-lg font-medium mt-2">Project 1</p>
						</div>
					</div>
				</section>
				<div className={"f"}>
					<a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Icongeek26 - Flaticon</a>
				</div>
			</main>
		</div>
	);
}
