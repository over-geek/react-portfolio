import { useState } from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import '../styles/Mainpage.css';
import '../styles/Mobile.css';

function MainPage() {
	const [lightMode, setLightMode] = useState(() => {
		const savedLightMode = localStorage.getItem('lightMode');
		return savedLightMode ? JSON.parse(savedLightMode) : false;
	});

	const toggleLightMode = () => {
		const newLightMode = (!lightMode);
		setLightMode(newLightMode);
		localStorage.setItem('lightMode', JSON.stringify(newLightMode));
	}

	return (
		<div className={`main ${lightMode ? 'light-mode' : ''}`}>
			<Navbar toggleLightMode={toggleLightMode} />
			<Layout />
		</div>
	)
}

export default MainPage;