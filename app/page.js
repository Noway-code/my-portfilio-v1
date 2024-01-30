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
		  <div className={'max-w-5xl w-full p-6 md:p-8 bg-blue-400 shadow-md rounded-2xl flex items-center snap-y var(--tw-scroll-snap-strictness) bg-gradient-to-bl from-cyan-600 to-purple-500'}>
			  <div className={'w-1/2 pr-6 snap-end'}>

				  <p className={'text-lg py-2 text-gray-200'}>
					  I&apos;m a developer based in Orlando, FL. I love to create and build things that live on the internet.
					  I am currently a student at the University of Central Florida pursuing a degree in Computer Science.
					  I am currently seeking internships as a Software Engineer. I am also a huge bookworm and love to read.
					  You can find me on <a className={'text-blue-500'} href="https://app.thestorygraph.com/profile/nowayreads" target="_blank" rel="noopener noreferrer">The StoryGraph</a> where I track my reading.

				  </p>
				  <p className={'text-lg py-2 text-gray-200'}>
					  Here are a few technologies I&apos;ve been working with recently:
				  </p>
				  <ul className={'text-lg py-2 text-gray-200 inline-flex gap-2'}>
					  <li>JavaScript (ES6+)</li>
					  <li>React</li>
					  <li>Next.js</li>
					  <li>Node.js</li>
					  <li>GraphQL</li>
					  <li>Python</li>
					  <li>Java</li>
					  <li>C++</li>
				  </ul>

			  </div>

			  {/* Image Section */}
			  <div className={'w-1/2'}>
				  <a href="https://www.linkedin.com/in/camilo-alvarez-velez/" target="_blank" rel="noopener noreferrer">
					  <div className={'relative mx-auto rounded-full lg:w-80 lg:h-80 mt-6 md:mt-0 overflow-hidden md:h-60 md:w-60 group hover:scale-110 duration-300'}>
						  <div
							  className={'w-full h-full absolute bg-blue-950 opacity-50 transition-opacity duration-700 group-hover:opacity-0 z-10'}
							  style={{ aspectRatio: '1/1' }} // Set aspect ratio to match the image
						  ></div>
						  <Image src={Headshot} alt={'Headshot of Camilo Alvarez-Velez'} className={'rounded-full'} layout={'fill'} objectFit={'cover'} />
					  </div>
				  </a>
			  </div>
		  </div>
	  </section>
	  <section style={{backgroundColor: '#37456b'}} className={"px-4 py-8 rounded-lg snap-center"}>
		  <div className={'flex flex-col justify-around md:flex-row items-center'}>
			  <div className="max-w-sm rounded shadow-2xl bg-gray-800 text-white hover:scale-110 duration-300 ">
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

				  </div>
			  </div>
			  <div className="max-w-sm rounded shadow-2xl bg-gray-800 text-white hover:scale-110 duration-300 ">
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

				  </div>
			  </div>
			  <div className="max-w-sm rounded shadow-2xl bg-gray-800 text-white hover:scale-110 duration-300 ">
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

				  </div>
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
    <div className={'mx-auto h-full w-full min-h-screen'}>
	    <div className="absolute top-0 z-[-1] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,100,215,0.3),rgba(255,255,255,0))]" style={{minHeight: '200vh'}}></div>
	    <SocialLinks />
	    <MainContent />
   </div>

  );
}
