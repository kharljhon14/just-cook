import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: Props) {
  return (
    <div className="relative h-screen w-screen">
      <div className="-z-10">
        <Image
          priority
          fill
          src={src}
          alt={alt}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    </div>
  );
}
