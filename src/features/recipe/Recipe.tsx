import { RecipeType } from '@/types/recipe';
import Image from 'next/image';
import Button from '../../components/Button';
import { useEffect } from 'react';

interface Props {
  recipe: RecipeType;
  handleOpen: () => void;
  handleSetRecipe: (recipe: RecipeType) => void;
  contentPosition: 'left' | 'right';
}

export default function Recipe({
  recipe,
  handleOpen,
  handleSetRecipe,
  contentPosition = 'right',
}: Props) {
  const handleViewRecipe = () => {
    handleSetRecipe(recipe);
    handleOpen();
  };

  return (
    <div className="lg:mx-44">
      <div className="text-brown-400 lg:flex lg:gap-x-4 space-y-2">
        <Image
          width={800}
          height={200}
          src={recipe.images.medium}
          alt="recipe"
          className={`${contentPosition === 'left' ? 'order-2' : 'order-1'}`}
        />
        <div
          className={`flex flex-col justify-between lg:w-full space-y-6 ${
            contentPosition === 'left' ? 'order-1' : 'order-2'
          } `}
        >
          <div className={`space-y-2 ${contentPosition === 'left' ? 'lg:self-end' : ''} `}>
            <h1 className="font-bold text-xl">{recipe.title}</h1>
            <p>{recipe.description}</p>
          </div>

          <div className={`lg:w-28 ${contentPosition === 'left' ? '' : 'lg:self-end'}`}>
            <Button onClick={handleViewRecipe}>View recipe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
