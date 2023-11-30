import Recipe from '@/features/recipe/Recipe';
import { RecipeType } from '@/types/recipe';
import useSWR from 'swr';

interface Props {
  handleOpen: () => void;
}

export default function RecipeList({ handleOpen }: Props) {
  const { data, isLoading, error } = useSWR<RecipeType[]>('http://localhost:3001/recipes');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  return (
    <div className="space-y-8 m-4">
      {data?.map((recipe) => (
        <Recipe
          key={recipe.uuid}
          recipe={recipe}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
}
