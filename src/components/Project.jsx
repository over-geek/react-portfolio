import { CiFolderOn } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Project = () => {
	return (
		<section id='projects'>
			<h2 className="numbered-heading">
				Web Projects
			</h2>
			<div className="project_container">
				<div className='project_card'>
					<div className='project_content d_flex_col'>
						<div className='project_icons d_flex d_flex_ai'>
							<CiFolderOn className='folder_icon' />
							<div className='d_flex'>
								<a href="#">
									<FiGithub className='github_icon' />
								</a>
								<a href="#">
									<FaExternalLinkAlt className='link_icon' />
								</a>
							</div>
						</div>
						<div className='project_description'>
							<h3>Space Rocket Reservation</h3>
							<p>
								A single page web app to reserve space rockets.
							</p>
						</div>
						<div>
							<ul className='project_stack d_flex'>
								<li>React</li>
								<li>Bootstrap</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='project_card'>
					<div className='project_content d_flex_col'>
						<div className='project_icons d_flex d_flex_ai'>
							<CiFolderOn className='folder_icon' />
							<div className='d_flex'>
								<a href="#">
									<FiGithub className='github_icon' />
								</a>
								<a href="#">
									<FaExternalLinkAlt className='link_icon' />
								</a>
							</div>
						</div>
						<div className='project_description'>
							<h3>Space Rocket Reservation</h3>
							<p>
								A single page web app to reserve space rockets.
							</p>
						</div>
						<div>
							<ul className='project_stack d_flex'>
								<li>React</li>
								<li>Bootstrap</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='project_card'>
					<div className='project_content d_flex_col'>
						<div className='project_icons d_flex d_flex_ai'>
							<CiFolderOn className='folder_icon' />
							<div className='d_flex'>
								<a href="#">
									<FiGithub className='github_icon' />
								</a>
								<a href="#">
									<FaExternalLinkAlt className='link_icon' />
								</a>
							</div>
						</div>
						<div className='project_description'>
							<h3>Space Rocket Reservation</h3>
							<p>
								A single page web app to reserve space rockets.
							</p>
						</div>
						<div>
							<ul className='project_stack d_flex'>
								<li>React</li>
								<li>Bootstrap</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Project;