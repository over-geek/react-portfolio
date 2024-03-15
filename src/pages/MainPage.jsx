import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import '../styles/Mainpage.css';

function MainPage() {
	return (
		<div className='main d_flex'>
			<Navbar />
			<Layout />
		</div>
	)
}

export default MainPage;