import about from '../assets/about.png';
import project from '../assets/project.png';
import contact from '../assets/contact.png';

const Navbar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar_navlinks d_flex d_flex_jc'>
				<ul>
					<li>
						<a href="#" className='d_flex d_flex_ai'>
							Home
						</a>
					</li>
					<li>
						<a href="#" className='d_flex d_flex_ai'>
							About
							<img src={about} alt='about' />
						</a>
					</li>
					<li>
						<a href="#" className='d_flex d_flex_ai'>
							Projects
							<img src={project} alt='project' />
						</a>
					</li>
					<li>
						<a href="#" className='d_flex d_flex_ai'>
							Contact
							<img src={contact} alt='contact' />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;