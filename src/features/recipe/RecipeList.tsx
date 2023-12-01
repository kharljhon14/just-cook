import Recipe from '@/features/recipe/Recipe';
import { RecipeType } from '@/types/recipe';
import useSWR from 'swr';

interface Props {
  handleOpen: () => void;
  handleSetRecipe: (recipeId: string) => void;
}

export default function RecipeList({ handleOpen, handleSetRecipe }: Props) {
  const { data, isLoading, error } = useSWR<RecipeType[]>('http://localhost:3001/recipes');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  return (
    <div
      id="recipe"
      className="space-y-8 m-4 lg:m-8 lg:space-y-12"
    >
      {data?.map((recipe, idx) => (
        <Recipe
          contentPosition={idx % 2 ? 'left' : 'right'}
          handleSetRecipe={handleSetRecipe}
          key={recipe.uuid}
          recipe={recipe}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
}
