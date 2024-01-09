import Image from 'next/image'
import {AiFillTwitterCircle ,AiFillYoutube, AiFillLinkedin} from "react-icons/ai";
import  Headshot  from '/public/HeadshotChristmasEdit.png'

export default function Home() {
  return (
	  <div className={"mx-auto h-full w-full"}>
		  <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,100,215,0.3),rgba(255,255,255,0))]"></div>
		  <main className={"px-10 md:px-40 lg:px-40"}>
			  <section className={"min-h-screen"}>
				  <nav className="py-10 mb-12 flex justify-between">
					  <h1 className={"text-xl text-white font-Calibre"}>noway-code</h1>
					  <ul className={"flex items-center"}>
						  <li className={"hover:animate-wiggle"}><a className={"bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-8 "} href="#">Resume</a></li>
					  </ul>
				  </nav>
				  <div className={"flex flex-col md:flex-row items-center"}>
					  <div className={"text-center pt-10 md:mt-10 md:pr-8"}>
						  <h1 className={"text-4xl text-white py-2 font-bold text-center"}>Hi, I'm Camilo Alvarez-Velez </h1>
						  <p className={"text-xl py-2 text-center text-gray-500 max-w-xl mx-auto"}>I'm a developer based in Orlando, FL. I love to create and build things that live on the internet.</p>
					  </div>
					  <div className={"relative mx-auto rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96 group"}>
						  <div className={"absolute inset-0 bg-blue-800 opacity-40 rounded-full transition-opacity duration-300 group-hover:opacity-0"}></div>
						  <Image src={Headshot} alt={"Headshot of Camilo Alvarez-Velez"} className={"rounded-full"} />
					  </div>
				  </div>




				  <div className={"text-5xl flex justify-center gap-16 py-3 text-gray-500"}>
					  <AiFillYoutube/>
					  <AiFillLinkedin/>
					  <AiFillTwitterCircle/>
				  </div>
			  </section>
		  </main>
	  </div>

  )
}
