import PropTypes from 'prop-types';
import { CiFolderOn } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ProjectItem = ({ githubLink, externalLink, title, description, stack }) => {
	return (
		<div className='project_card'>
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
				<div className='project_description'>
					<h3>{title}</h3>
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
		</div>
	)
}

ProjectItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	stack: PropTypes.arrayOf(PropTypes.string).isRequired,
	githubLink: PropTypes.string.isRequired,
	externalLink: PropTypes.string.isRequired,
}

export default ProjectItem;