'use client';
import { SWRConfig } from 'swr';
import RecipeList from './RecipeList';
import fetcher from '@/utils/fetcher';
import RecipeModal from './RecipeModal';

export default function RecipeSection() {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <RecipeList />
      <RecipeModal />
    </SWRConfig>
  );
}
