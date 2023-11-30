import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {}

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-brown-400 text-yellow-400 p-2 rounded-md text-sm"
      {...props}
    >
      {children}
    </button>
  );
}
