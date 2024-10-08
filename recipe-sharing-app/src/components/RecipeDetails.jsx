import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
	const { recipeId } = useParams();
	const recipe = useRecipeStore((state) =>
		state.recipes.find((recipe) => recipe.id === parseInt(recipeId, 10))
	);

	if (!recipe) {
		return <p>Recipe not found.</p>;
	}

	return (
		<div>
			<h1>{recipe.title}</h1>
			<p>{recipe.description}</p>
		</div>
	);
};

export default RecipeDetails;
