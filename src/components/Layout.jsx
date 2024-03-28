import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';

const Layout = () => {
	return (
		<div className='layout'>
			<Home />
			<About />
			<Project />
			<Contact />
			<Footer />
		</div>
	)
}

export default Layout;