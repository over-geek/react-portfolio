import { FaReact } from "react-icons/fa";
import { SiWebpack, SiSpringboot, SiRubyonrails, SiVite } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt, FaJava, FaDocker, FaBootstrap, FaGithub, FaYarn, FaNpm } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { GiCapybara } from "react-icons/gi";

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
							I&apos;m a passionate full-stack engineer with a knack for crafting robust, scalable solutions using Java, Python, JavaScript, and Ruby.
							My expertise spans frameworks like <span className="light_green">Spring Boot</span>, <span className="light_green">React + TypeScript</span>, <span className="light_green">Flask</span>, and <span className="light_green">Ruby on Rails</span>, allowing me to build seamless, end-to-end applications that delight users and solve real-world problems.
							Currently, I thrive as a Java Spring Boot developer, leveraging my deep understanding of backend systems to deliver high-performance, secure applications.
						</p>
						<p>
							With a foundation in <span className="light_green">information security</span>, I bring a security-first mindset to every project, ensuring data integrity and system resilience. 
							My curiosity drives me to explore cutting-edge fields like <span className="light_green">AI</span> and <span className="light_green">machine learning</span>, where I see immense potential to shape the future of technology. As a vocal advocate for digitalization, I believe in harnessing tech to streamline processes and empower businesses.
						</p>
						<p>
							What sets me apart is my adaptability, relentless problem-solving, and a commitment to continuous growth. In the fast-paced world of tech, I&apos;m always learning, experimenting, and pushing boundaries to deliver innovative solutions that make an impact. Let&apos;s build something extraordinary together!
						</p>
						<p>Here are a few technologies I&apos;ve been working with recently:</p>
					</div>
					<div className='skill_list_container'>
						<ul className='skill_list'>
							<li className='d_flex d_flex_ai'>
								Java
								<FaJava />
							</li>
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
                Spring Boot
                <SiSpringboot />
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
                Docker
                <FaDocker />
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