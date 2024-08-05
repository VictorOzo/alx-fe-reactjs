import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			<MainContent />
			<WelcomeMessage />
			<Footer />
		</>
	);
}

export default App;
