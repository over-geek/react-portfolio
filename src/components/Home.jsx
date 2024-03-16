import '../styles/Dynamic_text.scss';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
	return (
		<section id='home'>
			<div className='main_text'>
				<div id='dynamic_text'></div>
				<p className='main_description_text'>
					I am <span className='light_green'>Agyare Kissi Kenneth</span>, a passionate full-stack developer with a knack for problem-solving and a keen eye for detail. 
					With experience in both frontend and backend technologies, I strive to create seamless and user-friendly applications that deliver exceptional user experiences.
				</p>
				<div className="socials_container">
					<ul className='d_flex'>
						<li>
							<a href="https://github.com/over-geek" target='_blank' className='d_flex d_flex_ai'>
								<FaGithub />
								GitHub
							</a>
						</li>
						<li>
							<a href="#" target='_blank' className='d_flex d_flex_ai'>
								<FaSquareXTwitter />
								X
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/kenneth-agyare-kissi" target='_blank' className='d_flex d_flex_ai'>
								<FaLinkedin />
								LinkedIn
							</a>
						</li>
						<li>
							<a href="#" target='_blank' className='d_flex d_flex_ai'>
								<FaCodepen />
								Codepen
							</a>
						</li>
						<li>
							<a href="#" target='_blank' className='d_flex d_flex_ai'>
								<FaInstagram />
								Instagram
							</a>
						</li>
						<li>
							<a href="#" target='_blank' className='d_flex d_flex_ai'>
								<FaSteam />
								Steam
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div>
				
			</div>
		</section>
	)
}

export default Home;