import { FaReact } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYarn } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { GiCapybara } from "react-icons/gi";
import { SiRubygems } from "react-icons/si";
import { SiMui } from "react-icons/si";

const About = () => {
	return (
		<section id='about'>
			<h2 className="numbered-heading">
				About Me
			</h2>
			<div className='about_container d_flex'>
				<div className='about_description_container'>
					<div className='about_description d_flex_col'>
						<p>
							I am a self-driven, career-oriented software developer specializing in Full-Stack development and open-source contributions.
							Currently, I am pursuing a bachelor&apos;s degree in computer science.
						</p>
						<p>
							Importantly, through the <a href="https://www.microverse.org/" target="_blank" className="light_green">Microverse Remote Full-Stack development program</a>, I&apos;ve embarked on an incredible journey, honing my skills as a developer while collaborating with talented individuals from around the globe. 
							This experience has not only sharpened my technical abilities but also enhanced my collaboration skills, as I&apos;ve worked closely with diverse teams to deliver high-quality software solutions. 
						</p>
						<p>
							I pride myself on my <span className="light_green">adaptability</span>, <span className="light_green">problem-solving prowess</span>, and a <span className="light_green">relentless drive</span> to learn and grow in the ever-evolving field of technology. 
							With a strong foundation in both technical and soft skills, I am eager to take on new challenges and contribute meaningfully to innovative projects.
						</p>
						<p>
							Beyond learning, I particularly enjoy playing around with 3D rendering and models, adding a creative dimension to my work.
						</p>
						<p>Here are a few technologies I&apos;ve been working with recently:</p>
					</div>
					<div className='skill_list_container'>
						<ul className='skill_list'>
							<li className='d_flex d_flex_ai'>
								JavaScript (ES6+)
								<IoLogoJavascript />
							</li>
							<li className='d_flex d_flex_ai'>
								Ruby
								<DiRuby />
							</li>
							<li className='d_flex d_flex_ai'>
								Python
								<FaPython />
							</li>
							<li className='d_flex d_flex_ai'>
								HTML
								<FaHtml5 />
							</li>
							<li className='d_flex d_flex_ai'>
								CSS3
								<FaCss3 />
							</li>
							<li className='d_flex d_flex_ai'>
                Ruby on Rails
                <SiRubyonrails />
              </li>
              <li className='d_flex d_flex_ai'>
                React
                <FaReact />
              </li>
              <li className='d_flex d_flex_ai'>
                RSpec
                <SiRubygems />
              </li>
              <li className='d_flex d_flex_ai'>
                Capybara
                <GiCapybara />
              </li>
              <li className='d_flex d_flex_ai'>
                Bootstrap
                <FaBootstrap />
              </li>
              <li className='d_flex d_flex_ai'>
                Material UI
                <SiMui />
              </li>
							<li className='d_flex d_flex_ai'>
                GitHub
                <FaGithub />
              </li>
              <li className='d_flex d_flex_ai'>
                Git
                <FaGitAlt />
              </li>
              <li className='d_flex d_flex_ai'>
                NPM
                <FaNpm />
              </li>
              <li className='d_flex d_flex_ai'>
                Yarn
                <FaYarn />
              </li>
              <li className='d_flex d_flex_ai'>
                Vite
                <SiVite />
              </li>
              <li className='d_flex d_flex_ai'>
                Webpack
                <SiWebpack />
              </li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;