import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Profile />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
