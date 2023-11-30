import HeroSection from '@/features/HeroSection';
import MainNavigation from '@/features/MainNavigation';
import RecipeSection from '@/features/recipe/RecipeSection';

export default function Home() {
  return (
    <main className=" scrollbar-thin">
      <HeroSection />
      <MainNavigation />
      <RecipeSection />
    </main>
  );
}
