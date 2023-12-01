'use client';
import { SWRConfig } from 'swr';
import RecipeList from './RecipeList';
import fetcher from '@/utils/fetcher';
import RecipeModal from './RecipeModal';
import useModal from '@/hooks/useModal';
import { useEffect, useState } from 'react';

export default function RecipeSection() {
  const { open, handleClose, handleOpen } = useModal();
  const [recipeId, setRecipeId] = useState<string>();

  const handleSetRecipe = (uuid: string) => {
    setRecipeId(uuid);
  };

  const handleCloseModal = () => {
    handleClose();
    setRecipeId(undefined);
  };

  useEffect(() => {
    if (open) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'scroll';
    console.log(open);
  }, [open]);

  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <RecipeList
        handleSetRecipe={handleSetRecipe}
        handleOpen={handleOpen}
      />
      {recipeId && (
        <RecipeModal
          recipeId={recipeId}
          open={open}
          handleClose={handleCloseModal}
        />
      )}
    </SWRConfig>
  );
}
