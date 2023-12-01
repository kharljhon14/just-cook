import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {}

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-brown-400 text-yellow-400  rounded-md text-sm px-3 py-2"
      {...props}
    >
      {children}
    </button>
  );
}
