'use client';
import { SWRConfig } from 'swr';
import RecipeList from './RecipeList';
import fetcher from '@/utils/fetcher';
import RecipeModal from './RecipeModal';
import useModal from '@/hooks/useModal';
import { useState } from 'react';
import { RecipeType } from '@/types/recipe';

export default function RecipeSection() {
  const { open, handleClose, handleOpen } = useModal();
  const [recipe, setRecipe] = useState<RecipeType>();

  const handleSetRecipe = (selectedRecipe: RecipeType) => {
    setRecipe(selectedRecipe);
  };

  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <RecipeList
        handleSetRecipe={handleSetRecipe}
        handleOpen={handleOpen}
      />
      <RecipeModal
        recipe={recipe}
        open={open}
        handleClose={handleClose}
      />
    </SWRConfig>
  );
}
