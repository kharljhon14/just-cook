import { Recipe as RecipeType } from '@/types/recipe';
import Image from 'next/image';

interface Props {
  recipe: RecipeType;
}

export default function Recipe({ recipe }: Props) {
  return (
    <div className="space-y-2">
      <Image
        width={400}
        height={200}
        src={recipe.images.medium}
        alt="recipe"
      />
      <h1 className="font-bold">{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  );
}
