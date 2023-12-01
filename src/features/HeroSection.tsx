import HeroImage from '@/features/HeroImage';

export default function HeroSection() {
  return (
    <div>
      <div className="hidden md:block">
        <HeroImage
          src="/img/banner.png"
          alt="Just Cook hero image"
        />
      </div>
      <div className="md:hidden">
        <HeroImage
          src="/img/banner--s.png"
          alt="Just Cook hero image"
        />
      </div>
    </div>
  );
}
