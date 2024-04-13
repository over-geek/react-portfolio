import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SideBar = () => {
	const [sidebar, setSideBar] =  useState(true);

	const toggleSidebar = () => {
		setSideBar(!sidebar);
		document.body.classList.add('no-scroll')
	}

	document.querySelectorAll('link').forEach(link => {
		link.addEventListener('click', () => document.body.classList.remove('no-scroll'))
	})	

	let sidebarClasses=['sidebarnav'];
	let overlayClasses = ['sidebar_overlay']
	if(sidebar) {
		sidebarClasses.push('d_none')
		overlayClasses.push('d_none')
		document.body.classList.remove('no-scroll')
	}

	return (
		<div className="sidebar_wrapper">
			<div className={overlayClasses.join(" ")}></div>
			<div>
				<IoIosMenu className="sidebar_btn" onClick={toggleSidebar} />
				<div className={sidebarClasses.join(" ")}>
					<ul className='d_flex_col d_flex_ai'>
						<li>
							<a href="#about" className='link d_flex d_flex_ai'>
								About
								<FaInfoCircle className='light_green' />
							</a>
						</li>
						<li>
							<a href="#projects" className='link d_flex d_flex_ai'>
								Projects
								<FaFileCode className='light_green' />
							</a>
						</li>
						<li>
							<a href="#contact" className='link d_flex d_flex_ai'>
								Contact
								<IoMdMail className='light_green' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SideBar;