'use client';
import { SWRConfig } from 'swr';
import RecipeList from './RecipeList';
import fetcher from '@/utils/fetcher';
import RecipeModal from './RecipeModal';
import useModal from '@/hooks/useModal';
import { useEffect, useState } from 'react';
import { RecipeType } from '@/types/recipe';

export default function RecipeSection() {
  const { open, handleClose, handleOpen } = useModal();
  const [recipe, setRecipe] = useState<RecipeType>();

  const handleSetRecipe = (selectedRecipe: RecipeType) => {
    setRecipe(selectedRecipe);
  };

  const handleCloseModal = () => {
    handleClose();
    setRecipe(undefined);
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
      {recipe && (
        <RecipeModal
          recipe={recipe}
          open={open}
          handleClose={handleCloseModal}
        />
      )}
    </SWRConfig>
  );
}
