import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';

function App() {
	return (
		<>
			<Router>
				<div className='App'>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/services' element={<Services />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</>
	);
}

export default App;
