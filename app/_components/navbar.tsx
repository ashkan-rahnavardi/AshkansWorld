'use client';

import Image from 'next/image';
import { useState } from 'react';
import Logo from '../../public/ash.png';

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="p-4 absolute z-10 bg-transparent w-screen">
			<div className="mx-auto flex justify-between items-center relative z-10">
				{/* Logo */}
				<a href="#">
					<Image
						src={Logo}
						alt="Logo"
						width={170}
						height={32}
						className="relative z-10"
					/>
				</a>

				{/* Navigation Links */}
				<div className="hidden md:flex space-x-4">
					<a href="#start" className="navbar-item hover:text-primary">
						Start<span className="text-primaryDark ml-1">/&gt;</span>
					</a>
					<a href="#work" className="navbar-item hover:text-primary">
						Work<span className="text-primaryDark ml-1">/&gt;</span>
					</a>
					<a href="#about" className="navbar-item hover:text-primary">
						About<span className="textyDark ml-1">/&gt;</span>
					</a>
					<a href="#contact" className="navbar-item hover:text-primary">
						Contact<span className="text-primaryDark ml-1">/&gt;</span>
					</a>
				</div>

				{/* Mobile Menu Icon */}
				<div className="md:hidden relative z-10">
					<button onClick={toggleMenu} className="text-white">
						<svg
							className="w-12 h-12"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							></path>
						</svg>
					</button>
				</div>

				{/* Mobile Menu Dropdown */}
				<div
					className={`${
						isMenuOpen ? 'max-h-full' : 'max-h-0 invisible'
					} md:hidden fixed top-16 right-0 left-0 text-center p-4 transition-all duration-300 ease-in-out overflow-hidden navbar-dropdown z-0`}
				>
					<a
						href="#start"
						className="block navbar-item hover:text-primary py-2"
					>
						Start<span className="text-primaryDark ml-1">/&gt;</span>
					</a>
					<a href="#work" className="block navbar-item hover:text-primary py-2">
						Work<span className="text-primaryDark ml-1">/&gt;</span>
					</a>
					<a
						href="#about"
						className="block navbar-item hover:text-primary py-2"
					>
						About<span className="textyDark ml-1">/&gt;</span>
					</a>
					<a
						href="#contact"
						className="block navbar-item hover:text-primary py-2 mb-4"
					>
						Contact<span className="text-primaryDark ml-1">/&gt;</span>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
