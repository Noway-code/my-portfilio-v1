
const Header = () => {
	return (
		<div className={`px-10 md:px-40 lg:px-40 `}>
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
