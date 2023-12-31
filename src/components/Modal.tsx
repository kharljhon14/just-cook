import { PropsWithChildren, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

interface Props extends PropsWithChildren {
  open: boolean;
  handleClose: () => void;
}

export default function Modal({ children, open, handleClose }: Props) {
  return (
    <div
      className={`bg-black/30 backdrop-blur-sm  w-full h-full items-center justify-center fixed left-0 top-0 bottom-0 right-0 overflow-hidden ${
        open ? 'flex' : 'hidden'
      }`}
    >
      <div className="bg-white lg:max-w-7xl w-full h-full lg:h-auto p-4 rounded-md max-h-full overflow-y-scroll scrollbar-none">
        <div className="flex flex-col">
          <button
            onClick={handleClose}
            className="text-3xl self-end mb-4"
          >
            <IoCloseSharp />
          </button>
          <div className="scrollbar-thin overflow-y-auto scrollbar-thumb-gray-400/20 scrollbar-track-gray-100/30">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
