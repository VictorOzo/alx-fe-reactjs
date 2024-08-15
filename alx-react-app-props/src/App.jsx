import './App.css';
import UserDetails from './components/ProfilePage';
import { UserContext } from './Contexts/UserContext';

function App() {
	const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

	return (
		<UserContext.Provider value={{ userData }}>
			<UserDetails />
		</UserContext.Provider>
	);
}

export default App;
