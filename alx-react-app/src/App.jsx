import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
	return (
		<>
			<Header />
			<MainContent />
			<WelcomeMessage />
			<UserProfile
				name='Alice'
				age='25'
				bio='Loves hiking and photography'
			/>
			<Footer />
		</>
	);
}

export default App;
