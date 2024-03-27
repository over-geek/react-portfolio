import ProjectItem from "./ProjectItem";
import valorant from '../assets/valorant.png';
import spacex from '../assets/falcon-9.webp';
import starship from '../assets/starship.jpg';
import dota from '../assets/dota.png';

const Project = () => {
	return (
		<section id='projects'>
			<h2 className="numbered-heading">
				Web Projects
			</h2>
			<div className="project_container">
				<ProjectItem
					githubLink="https://github.com/lRebornsl/space-travelers-hub"
					externalLink="https://space-travalers.netlify.app/"
					title="Space Travelers Hub"
					description="The SpaceX Mission Booking App is a web application designed for a company that provides commercial and scientific space travel services. 
					The app utilizes real-time data from the SpaceX API to allow users to browse and book rockets for upcoming space missions. Users can also join selected space missions, view mission details, and track mission progress."
					stack={["React", "CSS", "Bootstrap", "JavaScript"]}
					image={starship}
				/>
				<ProjectItem
					githubLink="https://github.com/grauJavier/api-capstone"
					externalLink="https://graujavier.github.io/api-capstone/dist/"
					title="VALORANT"
					description="This is a webapp that displays agents from the VALORANT game using the Valorant API. Users can also like and comment on the agents."
					stack={["React", "CSS", "Bootstrap", "JavaScript"]}
					image={valorant}
				/>
				<ProjectItem
					githubLink="https://github.com/over-geek/dota-stats"
					externalLink="https://papaya-fox-72c1a4.netlify.app/"
					title="Dota Stats"
					description="This is a website that displays characters from the popular game, DOTA, based on an external API"
					stack={["HTML", "CSS", "Bootstrap", "JavaScript"]}
					image={dota}
				/>
				<ProjectItem
					githubLink="https://github.com/over-geek/BookStore"
					externalLink="https://wondrous-gecko-6eea33.netlify.app/"
					title="BOOKSTORE"
					description="This is a webapp that displays a list of books and their authors. Users can also add and delete book items"
					stack={["React", "CSS", "Bootstrap", "JavaScript"]}
				/>
				<ProjectItem
					githubLink="https://github.com/over-geek/SpaceX-Clone"
					externalLink="https://hilarious-dasik-02f6e8.netlify.app/"
					title="SPACEX CLONE"
					description="The SpaceX Website Clone Project is an exciting web development endeavor aimed at replicating and customizing the official SpaceX website for educational and non-commercial purposes."
					stack={["React", "CSS", "Bootstrap", "JavaScript"]}
					image={spacex}
				/>
			</div>
		</section>
	)
}

export default Project;