import Image from 'next/image';
import { AiFillBook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Headshot from '/public/HeadshotChristmasEdit.png';

export default function Home() {
	return (
		<div className={'mx-auto h-full w-full'}>
			<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,100,215,0.3),rgba(255,255,255,0))]"></div>
			<div className="absolute bottom-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,100,215,0.3),rgba(255,255,255,0))]"></div>
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
							<h1 className={'text-4xl text-white py-2 font-bold text-center'}>Hi, I'm Camilo Alvarez-Velez </h1>
							<p className={'text-xl py-2 text-center text-gray-500 max-w-xl mx-auto'}>
								I'm a developer based in Orlando, FL. I love to create and build things that live on the internet.
							</p>
						</div>
						<div className={"relative mx-auto"}>
							<a href="https://www.linkedin.com/in/camilo-alvarez-velez/" target="_blank" rel="noopener noreferrer">
								<div className={'relative mx-auto rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96 group hover:scale-110 duration-300'}>
									<div
										className={'w-full h-full absolute bg-blue-900 opacity-50 transition-opacity duration-700 group-hover:opacity-0 z-10'}
										style={{ aspectRatio: '1/1' }} // Set aspect ratio to match the image
									> </div>
									<Image src={Headshot} alt={'Headshot of Camilo Alvarez-Velez'} className={'rounded-full'} layout={'fill'} objectFit={'cover'} />
								</div>
							</a>
						</div>
					</div>
				</section>
				<section>
					<div className={"flex-row lg:flex gap-10"}>
						<div className={"text-center shadow-lg p-10 rounded-xl my-10 flex-1"}>
							<Image src={Headshot} width={100} height={100} alt={"Design Icon"}/>
							<h3 className={"text-lg font-medium pt-8 pb-2 "}>Designs</h3>
							<p className="text-gray-800 py-1">Elegant code for your needs</p>
							<h4 className={"py-4 text-teal-600"}>What I use: </h4>
							<ul className={"*:inline-flex *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-3 *:py-1 text-sky-300 *:border-sky-500/15 *:bg-sky-500/10 *:space-x-2"}>
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
						<div className={"text-center shadow-lg p-10 rounded-xl my-10 flex-1"}>
							<Image src={Headshot} width={100} height={100} alt={"Code Icon"}/>
							<h3 className={"text-lg font-medium pt-8 pb-2"}>Designs</h3>
							<p className="text-gray-800 py-1">Elegant code for your needs</p>
							<h4 className={"py-4 text-teal-600"}>What I use: </h4>
							<p className="text-gray-800 py-1">C, Java, JS</p>
							<p className="text-gray-800 py-1">MySQL, MongoDB</p>
							<p className="text-gray-800 py-1">Next.js, Node.js, Express.js</p>
							<p className="text-gray-800 py-1">React, React Native, TailwindCSS, HTML, CSS</p>
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
				</section>
			</main>
		</div>
	);
}
