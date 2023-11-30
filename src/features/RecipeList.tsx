import Recipe from '@/components/Recipe';
import { RecipeType } from '@/types/recipe';
import useSWR from 'swr';

export default function RecipeList() {
  const { data, isLoading, error } = useSWR<RecipeType[]>('http://localhost:3001/recipes');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  return (
    <div className="space-y-6 m-3">
      {data?.map((recipe) => (
        <Recipe
          key={recipe.uuid}
          recipe={recipe}
        />
      ))}
    </div>
  );
}
