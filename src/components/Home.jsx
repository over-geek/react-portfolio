import '../styles/Dynamic_text.scss';
import '../styles/Mainpage.css';
import Spline from '@splinetool/react-spline';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Home = () => {
	return (
		<section id='home'>
			<div className='main_container'>
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
								<a href="https://twitter.com/KissiKenneth" target='_blank' className='d_flex d_flex_ai'>
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
								<a href="https://codepen.io/kenagy" target='_blank' className='d_flex d_flex_ai'>
									<FaCodepen />
									Codepen
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/_ken.agy" target='_blank' className='d_flex d_flex_ai'>
									<FaInstagram />
									Instagram
								</a>
							</li>
							<li>
								<a href="https://steamcommunity.com/profiles/76561199139387833" target='_blank' className='d_flex d_flex_ai'>
									<FaSteam />
									Steam
								</a>
							</li>
							<li>
								<a href="mailto:kagyare100@gmail.com" target='_blank' className='d_flex d_flex_ai'>
									<SiGmail />
									Gmail
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='spline_container'>
				<Spline scene="https://prod.spline.design/PCaNYCiDfsYHGAQJ/scene.splinecode" />
			</div>
		</section>
	)
}

export default Home;