import HeroImage from '@/components/HeroImage';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <HeroImage
        src="/img/banner.png"
        alt="Just Cook hero image"
      />
    </main>
  );
}
