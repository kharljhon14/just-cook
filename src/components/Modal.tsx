import { PropsWithChildren } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

interface Props extends PropsWithChildren {}

export default function Modal({ children }: Props) {
  return (
    <div className="bg-black/30 backdrop-blur-sm  w-full h-full flex items-center justify-center fixed left-0 top-0">
      <div className="bg-white lg:max-w-4xl lg:mx-0 mx-4 w-full p-4 rounded-md">
        <div className="flex flex-col">
          <button className="text-3xl self-end">
            <IoCloseSharp />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
