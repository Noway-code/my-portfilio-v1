"use client";
import React, { useEffect, useState } from 'react';

const Header = () => {
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const isScrolledDown = scrollTop > 50; // Change this value based on when you want the header to disappear

			setIsHeaderVisible(!isScrolledDown);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			// Cleanup the event listener on component unmount
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); // Empty dependency array ensures that the effect runs only once on mount

	return (
		<div className={`sticky top-0 px-10 md:px-40 lg:px-40 ${isHeaderVisible ? 'block transition-opacity opacity-100 duration-500' : 'transition-opacity opacity-15 duration-700'}`}>
			<nav className="py-10 mb-12 flex justify-between">
				<h1 className={'text-xl text-white font-Calibre'}>noway-code</h1>
				<ul className={'flex items-center'}>
					<li className={'hover:animate-wiggle'}>
						<a className={'bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md ml-8 '} href="#">
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
