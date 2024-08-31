import { Routes, Route } from 'react-router-dom';
import BlogPostDetails from './BlogPostDetails';

const BlogPost =()=> {
	return (
		<Routes>
			<Route path='/blog/:postId' element={<BlogPostDetails />} />
		</Routes>
	);
}
export default BlogPost;