// External imports
import Image from 'next/image';
import { AiFillBook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

// Internal imports
import Headshot from '/public/HeadshotChristmasEdit.png';
import WebDev from '/public/web-programming.png';

// Components
const SocialLinks = () => (
  <div className={'text-4xl fixed bottom-20 left-4 flex flex-col gap-8 items-start py-3 text-gray-400 opacity-80 ml-2'}>
    <a href={"https://github.com/Noway-code"} target="_blank" rel="noopener noreferrer">
      <AiFillGithub />
    </a>
    <a href={"https://www.linkedin.com/in/camilo-alvarez-velez/"} target="_blank" rel="noopener noreferrer">
      <AiFillLinkedin />
    </a>
    <a href={"https://app.thestorygraph.com/profile/nowayreads"} target="_blank" rel="noopener noreferrer">
      <AiFillBook />
    </a>
  </div>
);

const MainContent = () => (

  <main className={'h-screen snap-y snap-proximity overflow-y-auto'}>

	  <section className={'min-h-screen flex flex-col items-center justify-center snap-start'}>
		  <div className={'flex flex-col items-center justify-center py-14'}>
			  <h1 className={'text-5xl md:text-6xl font-bold text-white text-center'}>Camilo Alvarez-Velez</h1>
			  <h2 className={'text-2xl md:text-3xl font-bold text-white text-center'}>Software Engineer</h2>
		  </div>
		  <div className={'max-w-5xl w-full p-6 md:p-8 bg-blue-400 shadow-md rounded-2xl flex items-center bg-gradient-to-bl from-cyan-500 to-purple-800'}>
			  <div className={'w-1/2 pr-6'}>

				  <p className={'text-lg py-2 text-gray-200 font-Calibre'}>
					  I&apos;m a developer based in Orlando, FL. I love to create and build things that live on the internet.
					  I am currently a student at the University of Central Florida pursuing a degree in Computer Science.
					  I am currently seeking internships as a Software Engineer. I am also a huge bookworm and love to read.
					  You can find me on <a class="underline decoration-2 decoration-pink-500 hover:text-sky-300 duration-200" href="https://app.thestorygraph.com/profile/nowayreads" target="_blank"
					                        rel="noopener noreferrer">The StoryGraph</a> where I track my reading.
				  </p>
				  <p className={'text-lg py-2 text-gray-200'}>
					  <br/>Here are a few technologies I&apos;ve been working with recently:
				  </p>
				  <ul className={'tech-list text-lg py-2 text-gray-200 inline-flex gap-2'}>
					  <li className={'tech-item'}>JavaScript</li>
					  <li className={'tech-item'}>React</li>
					  <li className={'tech-item'}>Next.js</li>
					  <li className={'tech-item'}>Node.js</li>
					  <li className={'tech-item'}>GraphQL</li>
					  <li className={'tech-item'}>Python</li>
					  <li className={'tech-item'}>Java</li>
					  <li className={'tech-item'}>C</li>
				  </ul>

			  </div>

			  {/* Image Section */}
			  <div className={'w-1/2'}>
				  <a href="https://www.linkedin.com/in/camilo-alvarez-velez/" target="_blank" rel="noopener noreferrer">
					  <div
						  className={'relative mx-auto rounded-full lg:w-80 lg:h-80 mt-6 md:mt-0 overflow-hidden md:h-60 md:w-60 group hover:scale-110 duration-300'}>
						  <div
							  className={'w-full h-full absolute bg-blue-950 opacity-20 transition-opacity duration-700 group-hover:opacity-0 z-10'}
							  style={{ aspectRatio: '1/1' }} // Set aspect ratio to match the image
						  ></div>
						  <Image src={Headshot} alt={'Headshot of Camilo Alvarez-Velez'} className={'rounded-full'} layout={'fill'} objectFit={'cover'} />
					  </div>
				  </a>
			  </div>
		  </div>
	  </section>
	  <section style={{backgroundColor: '#37456b'}} className={"px-4 py-8 rounded-lg my-36 snap-center"}>
		  <div className={'flex flex-col justify-around md:flex-row items-center'}>
			  <div className="max-w-sm rounded shadow-2xl bg-gray-800 text-white hover:scale-110 duration-300 ">
				  <img className="w-full" src="/card-top.jpg" alt="Sunset in the mountains"/>
				  <div className="px-6 py-4">
					  <div className="font-bold text-xl mb-2">web dev :smile:</div>
					  <p className="text-gray-700 text-base">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					  </p>
				  </div>
				  <div className="px-6 pt-4 pb-2">
					  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
					  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
					  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>

				  </div>
			  </div>
			  <div className="max-w-sm rounded shadow-2xl bg-gray-800 text-white hover:scale-110 duration-300 ">
				  <img className="w-full" src="/card-top.jpg" alt="Sunset in the mountains"/>
				  <div className="px-6 py-4">
					  <div className="font-bold text-xl mb-2">i am bodybuilder :3</div>
					  <p className="text-gray-700 text-base">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					  </p>
				  </div>
				  <div className="px-6 pt-4 pb-2">
					  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
					  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
					  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>

				  </div>
			  </div>
			  <div className="max-w-sm rounded shadow-2xl bg-gray-800 text-white hover:scale-110 duration-300 ">
				  <img className="w-full" src="/card-top.jpg" alt="Sunset in the mountains"/>
				  <div className="px-6 py-4">
					  <div className="font-bold text-xl mb-2">weakest gurren lagann fan</div>
					  <p className="text-gray-700 text-base">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					  </p>
				  </div>
				  <div className="px-6 pt-4 pb-2">
					  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
					  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
					  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
				  </div>
			  </div>
		  </div>
	  </section>
	  <section className={"snap-start"}>
		  <div>
			  <h3 className={"text-3xl py-1"}>Projects</h3>
			  <p className={"text-md py-2 leading-8 text-gray-800"}>
				  I have worked on a variety of projects, ranging from web development to
				  machine learning. Here are some of my favorites.
			  </p>
		  </div>
		  <div className={"flex flex-col gap-12 py-10 pb-32 lg:flex-row lg:flex-wrap bg-blue-900 p-20 mx-20 "}>
			  <div className={"showcase basis-1/3 flex-1 drop-shadow-2xl relative"}>
				  <div className="description">
					  <p>This is the bold and commanding description text for Web Project 1. It takes up the size of the card.</p>
				  </div>
				  <Image src={'/card-top.jpg'} className={"rounded-lg object-cover"} layout={'responsive'} width={500} height={300} alt={"Web Project 1"}/>
			  </div>
			  <div className={"showcase basis-1/3 flex-1 drop-shadow-2xl relative"}>
				  <div className="description">
					  <p>This is the bold and commanding description text for Web Project 2. It takes up the size of the card.</p>
				  </div>
				  <Image src={'/card-top.jpg'} className={"rounded-lg object-cover"} layout={'responsive'} width={500} height={300} alt={"Web Project 2"}/>
			  </div>
			  <div className={"showcase basis-1/3 flex-1 drop-shadow-2xl relative"}>
				  <div className="description">
					  <p>This is the bold and commanding description text for Web Project 1. It takes up the size of the card.</p>
				  </div>
				  <Image src={'/card-top.jpg'} className={"rounded-lg object-cover"} layout={'responsive'} width={500} height={300} alt={"Web Project 1"}/>
			  </div>
			  <div className={"showcase basis-1/3 flex-1 drop-shadow-2xl relative"}>
				  <div className="description">
					  <p>This is the bold and commanding description text for Web Project 2. It takes up the size of the card.</p>
				  </div>
				  <Image src={'/card-top.jpg'} className={"rounded-lg object-cover"} layout={'responsive'} width={500} height={300} alt={"Web Project 2"}/>
			  </div>
			  <div className={"showcase basis-1/3 flex-1 drop-shadow-2xl relative"}>
				  <div className="description">
					  <p>This is the bold and commanding description text for Web Project 1. It takes up the size of the card.</p>
				  </div>
				  <Image src={'/card-top.jpg'} className={"rounded-lg object-cover"} layout={'responsive'} width={500} height={300} alt={"Web Project 1"}/>
			  </div>
			  <div className={"showcase basis-1/3 flex-1 drop-shadow-2xl relative"}>
				  <div className="description">
					  <p>This is the bold and commanding description text for Web Project 2. It takes up the size of the card.</p>
				  </div>
				  <Image src={'/card-top.jpg'} className={"rounded-lg object-cover"} layout={'responsive'} width={500} height={300} alt={"Web Project 2"}/>
			  </div>
		  </div>
	  </section>
	  <section className={"pt-40"}>
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
);

// Main component
export default function Home() {
  return (
	  <div className={'mx-auto h-full w-full min-h-screen relative'}> {/* Add 'relative' here */}
		  <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,100,215,0.3),rgba(255,255,255,0))]" style={{minHeight: '200vh'}}></div>
		  <div className="absolute top-0 min-h-screen w-screen bg-repeat opacity-10 z-[-1]" style={{backgroundImage: "url('/wallpapers/oriental-tiles.png')"}}></div>
		  <SocialLinks />
		  <MainContent />
	  </div>

  );
}
