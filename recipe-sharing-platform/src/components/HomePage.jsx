import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch('/data.json')
			.then((response) => response.json())
			.then((data) => setRecipes(data));
	}, []);

	return (
		<div className='container p-4 mx-auto'>
			<h1 className='mb-8 text-4xl font-bold text-center'>
				Recipe Sharing Platform
			</h1>
			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{recipes.map((recipe) => (
					<div
						key={recipe.id}
						className='overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg'>
						<img
							src={recipe.image}
							alt={recipe.title}
							className='object-cover w-full h-48'
						/>
						<div className='p-4'>
							<h3 className='mb-2 text-xl font-semibold'>
								{recipe.title}
							</h3>
							<p className='text-gray-600'>{recipe.summary}</p>
							<Link to={`/recipe/${recipe.id}`}>
								<button className='px-4 py-2 mt-4 text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600'>
									View Recipe
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
