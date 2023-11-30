import { RecipeType } from '@/types/recipe';
import Image from 'next/image';
import Button from '../../components/Button';

interface Props {
  recipe: RecipeType;
}

export default function Recipe({ recipe }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2  text-brown-400">
        <Image
          width={400}
          height={200}
          src={recipe.images.medium}
          alt="recipe"
        />
        <h1 className="font-bold text-xl">{recipe.title}</h1>
        <p>{recipe.description}</p>
      </div>
      <Button>View recipe</Button>
    </div>
  );
}
