import { useQuery } from '@tanstack/react-query';

const PostsComponent = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ['postsData'],
		queryFn: () =>
			fetch('https://jsonplaceholder.typicode.com/posts').then(
				(res) => res.json
			),
	});
	if (isPending) return 'Loading...';
	if (error) return 'An Error has occurred: ' + error.message;
	return (
		<>
			<h1>Posts Component</h1>
			<h2>{data.title}</h2>
			<p>{ data.body}</p>
		</>
	);
};

export default PostsComponent;
