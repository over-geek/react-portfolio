import { useState } from 'react';
import PropTypes from 'prop-types';
import { CiFolderOn } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ProjectItem = ({ githubLink, externalLink, title, description, stack, image }) => {
	const [isHovered, setIsHovered] = useState(false);
	const isMobile = window.matchMedia("(max-width: 768px)").matches;

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseOut = () => {
		setIsHovered(false);
	}

	return (
		<div 
			className='project_card'
			onMouseEnter={handleHover}
			onMouseLeave={handleMouseOut}
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative',
				
			}}
		>
			<div className="overlay"></div>
			<div className='project_content d_flex_col'>
				<div className='project_icons d_flex d_flex_ai'>
					<CiFolderOn className='folder_icon' />
					<div className='d_flex'>
						<a href={githubLink} target='_blank'>
							<FiGithub className='github_icon' />
						</a>
						<a href={externalLink} target='_blank'>
							<FaExternalLinkAlt className='link_icon' />
						</a>
					</div>
				</div>
				<div className='project_description_container d_flex_col'>
					<div className='project_title_container'><h3>{title}</h3></div>
					{(isHovered || isMobile) && (
						<div className='project_description d_flex_col d_flex_ai'>
							<div className='project_about d_flex d_flex_jc'>
								<p>{description}</p>
							</div>
							<div className='stack_container'>
								<ul className='project_stack d_flex'>
									{stack.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

ProjectItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	stack: PropTypes.arrayOf(PropTypes.string).isRequired,
	githubLink: PropTypes.string.isRequired,
	externalLink: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

export default ProjectItem;