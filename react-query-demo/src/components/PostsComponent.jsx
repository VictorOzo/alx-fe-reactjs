import { useQuery } from '@tanstack/react-query';

const PostsComponent = () => {
	const { isLoading, isError, data } = useQuery({
		queryKey: ['fetchPosts'],
		queryFn: () =>
			fetch('https://jsonplaceholder.typicode.com/posts').then(
				(res) => res.json
			),
	});
	if (isLoading) return 'Loading...';
	if (isError) return 'An Error has occurred: ' + isError.message;
	return (
		<>
			<h1>Posts Component</h1>
			<h2>{data.title}</h2>
			<p>{data.body}</p>
		</>
	);
};

export default PostsComponent;
