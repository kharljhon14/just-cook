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
      <div className="flex flex-col space-y-4 lg:space-y-8 text-brown-400 lg:h-[45rem] lg:mx-6 lg:mt-0 md:px-6 px-4 lg:px-2">
        <div className="space-y-4 lg:flex lg:space-y-0 lg:space-x-6">
          <Image
            width={800}
            height={200}
            src={recipe?.images.medium ?? ''}
            style={{
              width: '450px',
              height: '240px',
              objectFit: 'cover',
            }}
            alt="recipe"
            className=" md:hidden lg:block"
          />

          <Image
            width={1000}
            height={200}
            src={recipe?.images.full ?? ''}
            alt="recipe"
            style={{
              width: '1000px',
              height: '400px',
              objectFit: 'cover',
            }}
            className=" hidden md:block lg:hidden"
          />
          <div className="space-y-8 lg:flex flex-col justify-between lg:flex-grow">
            <div className="space-y-4">
              <h1 className="font-bold text-xl">{recipe?.title}</h1>
              <p>{recipe?.description}</p>
            </div>

            <div className="flex items-center justify-between lg:justify-start lg:space-x-24">
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
        </div>

        <div className="space-y-4 lg: lg:space-y-0 lg:flex lg:space-x-6">
          <RecipeIngredients recipe={recipe} />

          <div className="space-y-4">
            <h2 className="font-bold text-lg uppercase">Directions:</h2>
            <ul className=" list-outside list-disc px-4 space-y-2">
              {recipe?.directions.map((direction) => (
                <li key={direction.instructions}>
                  <p>
                    {direction.instructions}{' '}
                    {direction.optional && (
                      <span className="text-sm font-semibold">(Optional)</span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-4 lg:justify-end lg:space-x-8 py-10 lg:space-y-0 lg:flex-row text-sm">
          <p className=" italic font-semibold">
            Post Date:{' '}
            {recipe && (
              <span className="font-normal">{new Date(recipe.postDate).toLocaleString()}</span>
            )}
          </p>
          <p className=" italic font-semibold">
            End Date:{' '}
            {recipe && (
              <span className="font-normal">{new Date(recipe.editDate).toLocaleString()}</span>
            )}
          </p>
        </div>
      </div>
    </Modal>
  );
}
