import { useQuery } from '@tanstack/react-query';

const PostsComponent = () => {
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['fetchPosts'],
		queryFn: () =>
			fetch('https://jsonplaceholder.typicode.com/posts').then(
				(res) => res.json
			),
	});
	if (isLoading) return 'Loading...';
	if (isError) return 'An Error has occurred: ' + error.message;
	return (
		<div>
			<h1>Post Content</h1>
			{data.map((post) => (
				<div key={post.id}>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
};

export default PostsComponent;
