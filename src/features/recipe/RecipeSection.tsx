'use client';
import { SWRConfig } from 'swr';
import RecipeList from './RecipeList';
import fetcher from '@/utils/fetcher';
import RecipeModal from './RecipeModal';
import useModal from '@/hooks/useModal';

export default function RecipeSection() {
  const { open, handleClose, handleOpen } = useModal();

  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <RecipeList handleOpen={handleOpen} />
      <RecipeModal
        open={open}
        handleClose={handleClose}
      />
    </SWRConfig>
  );
}
