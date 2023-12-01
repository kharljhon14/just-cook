import Modal from '@/components/Modal';
import { RecipeType } from '@/types/recipe';
import Image from 'next/image';
import RecipeIngredients from './RecipeIngredients';

interface Props {
  recipe?: RecipeType;
  open: boolean;
  handleClose: () => void;
}

export default function RecipeModal({ recipe, open, handleClose }: Props) {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
    >
      <div className="flex flex-col space-y-4 text-brown-400">
        <Image
          width={400}
          height={200}
          src={recipe?.images.medium ?? ''}
          alt="recipe"
        />
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-bold text-xl">{recipe?.title}</h1>
            <p>{recipe?.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-semibold">
              Cooking time: <span className="font-normal">{recipe?.cookTime}</span>
            </p>
            <p className="font-semibold">
              Prep time: <span className="font-normal">{recipe?.prepTime}</span>
            </p>
            <p className="font-semibold">
              Servings: <span className="font-normal">{recipe?.servings}</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <RecipeIngredients recipe={recipe} />

          <div>
            <h2 className="font-bold text-lg uppercase">Directions:</h2>
            <ul className=" list-outside list-disc px-4">
              {recipe?.directions.map((direction) => (
                <li key={direction.instructions}>
                  <p>{direction.instructions}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}
