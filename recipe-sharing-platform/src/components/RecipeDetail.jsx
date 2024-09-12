import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState(null);

	useEffect(() => {
		fetch('/data.json')
			.then((response) => response.json())
			.then((data) => {
				const selectedRecipe = data.find(
					(recipe) => recipe.id === parseInt(id)
				);
				setRecipe(selectedRecipe);
			});
	}, [id]);

	if (!recipe) return <div>Loading...</div>;

	return (
		<div className='container p-4 mx-auto'>
			<h1 className='mb-8 text-4xl font-bold text-center'>{recipe.title}</h1>
			<img
				src={recipe.image}
				alt={recipe.title}
				className='object-cover w-full h-64 mb-8 rounded-lg'
			/>
			<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
				<div className='p-6 bg-white rounded-lg shadow-lg'>
					<h2 className='mb-4 text-2xl font-semibold'>Ingredients</h2>
					<ul className='list-disc list-inside'>
						{recipe.ingredients.map((ingredient, index) => (
							<li key={index} className='text-lg text-gray-700'>
								{ingredient}
							</li>
						))}
					</ul>
				</div>
				<div className='p-6 bg-white rounded-lg shadow-lg'>
					<h2 className='mb-4 text-2xl font-semibold'>Instructions</h2>
					<ol className='list-decimal list-inside'>
						{recipe.instructions.map((step, index) => (
							<li key={index} className='mb-2 text-lg text-gray-700'>
								{step}
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetail;
