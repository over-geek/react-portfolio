import { useState, useEffect } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const handleScroll = () => {
		const offset = window.scrollY;
		if(offset > 200) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	let navbarClasses=['sidebar'];
	if(scrolled) {
		navbarClasses.push('scrolled')
	}

	return (
		<div className={navbarClasses.join(" ")}>
			<nav className='sidebar_navlinks d_flex d_flex_ai'>
				<ul className='d_flex'>
					<li>
						<a href="#about" className='d_flex d_flex_ai'>
							About
							<FaInfoCircle className='light_green' />
						</a>
					</li>
					<li>
						<a href="#projects" className='d_flex d_flex_ai'>
							Projects
							<FaFileCode className='light_green' />
						</a>
					</li>
					<li>
						<a href="#contact" className='d_flex d_flex_ai'>
							Contact
							<IoMdMail className='light_green' />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar;