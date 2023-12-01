import { RecipeType, SpecialType } from '@/types/recipe';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface IngredientWithSpecial {
  uuid: string;
  ingredientName: string;
  specialTitle?: string;
  specialText?: string;
}

interface Props {
  recipe?: RecipeType;
}

export default function RecipeIngredients({ recipe }: Props) {
  const { data } = useSWR<SpecialType[]>('http://localhost:3001/specials');

  const [ingredientsWithSpecial, setIngredientsWithSpecial] = useState<IngredientWithSpecial[]>([]);

  useEffect(() => {
    if (data && recipe) {
      const { ingredients } = recipe;

      const newIngredientsWithSpecial: IngredientWithSpecial[] = ingredients.map((ingredient) => {
        const foundSpecial = data.find(({ ingredientId }) => ingredientId === ingredient.uuid);

        if (foundSpecial)
          return {
            uuid: ingredient.uuid,
            ingredientName: ingredient.name,
            specialTitle: foundSpecial.title,
            specialText: foundSpecial.text,
          };

        return {
          uuid: ingredient.uuid,
          ingredientName: ingredient.name,
        };
      });
      setIngredientsWithSpecial(newIngredientsWithSpecial);
    }
  }, [data, recipe]);

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-lg uppercase">Ingredients:</h2>
      <ul className=" list-outside list-disc px-4 space-y-2">
        {ingredientsWithSpecial.map((ingredient) => (
          <li key={ingredient.uuid}>
            <span className=" capitalize">{ingredient.ingredientName}</span>
            {ingredient.specialText && ingredient.specialTitle && (
              <ul className="list-circle ml-4 list-outside">
                <li>{ingredient.specialTitle}</li>
                <li>{ingredient.specialText}</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
