import '../styles/Button_flip.scss';

const Contact = () => {
	return (
		<section id="contact">
			<div className='contact_contents d_flex_col d_flex_ai'>
				<h2 className="numbered-heading exclude">
					Send Bytes My Way!
				</h2>
				<div className="contact_description">
					<p>
						Got a project in mind or just want to chat about tech? Shoot me a message, and let&apos;s connect!
					</p>
				</div>
				<a href="mailto:kagyare100@gmail.com" className="btn-flip" data-back="Contact Me" data-front="Say Hello"></a>
				</div>
		</section>
	)
}

export default Contact;