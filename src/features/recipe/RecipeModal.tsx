import Modal from '@/components/Modal';
import { RecipeType } from '@/types/recipe';

import Image from 'next/image';

import useSWR from 'swr';
import RecipeIngredients from './RecipeIngredients';

interface Props {
  recipeId?: string;
  open: boolean;
  handleClose: () => void;
}

export default function RecipeModal({ recipeId, open, handleClose }: Props) {
  const { data } = useSWR<RecipeType>(`http://localhost:3001/recipes/${recipeId}`);

  return (
    <Modal
      open={open}
      handleClose={handleClose}
    >
      {data && (
        <div className="flex flex-col space-y-4 lg:space-y-8 text-brown-400 lg:h-[45rem] lg:mx-6 lg:mt-0 md:px-6 px-4 lg:px-2">
          <div className="space-y-4 lg:flex lg:space-y-0 lg:space-x-6">
            <Image
              width={800}
              height={200}
              src={data?.images.medium ?? ''}
              style={{
                width: '450px',
                height: '240px',
                objectFit: 'cover',
              }}
              alt="data"
              className=" md:hidden lg:block"
            />

            <Image
              width={1000}
              height={200}
              src={data?.images.full ?? ''}
              alt="data"
              style={{
                width: '1000px',
                height: '400px',
                objectFit: 'cover',
              }}
              className=" hidden md:block lg:hidden"
            />
            <div className="space-y-8 lg:flex flex-col justify-between lg:flex-grow">
              <div className="space-y-4">
                <h1 className="font-bold text-xl">{data?.title}</h1>
                <p>{data?.description}</p>
              </div>

              <div className="flex items-center justify-between lg:justify-start lg:space-x-24">
                <p className="font-semibold">
                  Cooking time: <span className="font-normal">{data?.cookTime}</span>
                </p>
                <p className="font-semibold">
                  Prep time: <span className="font-normal">{data?.prepTime}</span>
                </p>
                <p className="font-semibold">
                  Servings: <span className="font-normal">{data?.servings}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg: lg:space-y-0 lg:flex lg:space-x-6">
            <RecipeIngredients recipe={data} />

            <div className="space-y-4">
              <h2 className="font-bold text-lg uppercase">Directions:</h2>
              <ul className=" list-outside list-disc px-4 space-y-2">
                {data?.directions.map((direction) => (
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
              {data && (
                <span className="font-normal">{new Date(data.postDate).toLocaleString()}</span>
              )}
            </p>
            <p className=" italic font-semibold">
              End Date:{' '}
              {data && (
                <span className="font-normal">{new Date(data.editDate).toLocaleString()}</span>
              )}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
}
