'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { IoMenu, IoCloseSharp } from 'react-icons/io5';

export default function MainNavigation() {
  const [active, setActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky ? 'sticky -top-1 bg-brown-400' : ''
      } lg:py-3 py-2 text-white uppercase flex flex-col overflow-hidden`}
    >
      <button
        onClick={() => setActive((prev) => !prev)}
        className={`self-end mr-2 text-4xl lg:hidden ${active ? 'mb-4' : 'mb-0'}`}
      >
        {active ? <IoCloseSharp /> : <IoMenu />}
      </button>
      <div
        className={`flex flex-col justify-center font-semibold items-center gap-y-4 overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          active ? 'h-40 opacity-100' : 'h-0 opacity-0'
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="#recipe">Recipes</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact Us</Link>
      </div>

      <div className=" max-w-lg w-full self-center justify-between font-semibold items-center gap-y-4 overflow-hidden transition-all duration-300 ease-in-out hidden lg:flex">
        <Link href="/">Home</Link>
        <Link href="#recipe">Recipes</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact Us</Link>
      </div>
    </nav>
  );
}
