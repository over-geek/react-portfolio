import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiLightBulb } from "react-icons/hi";

const Navbar = ({ toggleLightMode }) => {
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
				<button className='toggle-bgcolor-btn d_flex d_flex_ai d_flex_jc' onClick={toggleLightMode}>
					<HiLightBulb className='bulb' />
				</button>
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

Navbar.propTypes = {
	toggleLightMode: PropTypes.bool.isRequired,
}

export default Navbar;