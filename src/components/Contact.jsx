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
				<div className="form_container">
					<form 
						action="https://formsubmit.co/f0f1291cd42dbe9af96e80065971a0d2" 
						id="form"
						method='POST'
						target='_blank'
						className='d_flex d_flex_col'
					>
						<div className='input_container'>
							<input type="text" name='name' placeholder='full name' required />
							<input type="email" name="email" placeholder='email address' required />
						</div>
						<div>
							<textarea name="message" id="message_container" rows="10" required></textarea>
						</div>
						<div className='d_flex d_flex_jc'>
							<button type='submit' className="btn-flip form_btn" data-back="Contact Me" data-front="Say Hello"></button>
						</div>
					</form>
				</div>
				</div>
		</section>
	)
}

export default Contact;