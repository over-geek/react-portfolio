const About = () => {
	return (
		<section id='about'>
			<h2 className="numbered-heading">
				About Me
			</h2>
			<div className='d_flex'>
				<div className='about_description_container'>
					<div className='about_description d_flex_col'>
						<p>
							I am a self-driven, career-oriented software developer specializing in full-stack development and open-source contributions.
							Currently, I am pursuing a bachelor&apos;s degree in computer science.
						</p>
						<p>
							I have a strong foundation in building interactive web applications on both the client and server sides. My expertise includes technologies like JavaScript, React, Ruby on Rails, and Python.
							I am passionate about continuous learning and strive to improve myself in any situation, always seeking new opportunities to expand my skills and knowledge.
						</p>
						<p>
							Beyond learning, I particularly enjoy playing around with 3D rendering and models, adding a creative dimension to my work.
						</p>
						<p>Here are a few technologies I&apos;ve been working with recently:</p>
					</div>
					<div className='skill_list_container'>
						<ul className='skill_list'>
							<li>JavaScript (ES6+)</li>
							<li>React</li>
							<li>Ruby</li>
							<li>Ruby on Rails</li>
							<li>Python</li>
							<li>Webpack</li>
						</ul>
					</div>
				</div>
				<div></div>
			</div>
		</section>
	)
}

export default About;