import HeroSection from '@/features/HeroSection';
import MainNavigation from '@/features/MainNavigation';
import RecipeSection from '@/features/RecipeSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MainNavigation />
      <RecipeSection />
    </main>
  );
}
