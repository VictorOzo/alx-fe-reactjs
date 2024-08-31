import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostDetails from './components/BlogPostDetails';
import Profile from './components/Profile';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Profile />} />
					<Route path='/blog/:postId' element={<BlogPostDetails />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
