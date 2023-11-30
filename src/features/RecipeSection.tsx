'use client';
import { SWRConfig } from 'swr';
import RecipeList from './RecipeList';
import fetcher from '@/utils/fetcher';

export default function RecipeSection() {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <RecipeList />
    </SWRConfig>
  );
}
