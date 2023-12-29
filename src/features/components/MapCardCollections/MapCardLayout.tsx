import type { PropsWithChildren } from 'react';

export interface MapCardLayoutProps {
  position?: { x: string; y: string };
  cursor?: 'default' | 'cursor';
}

export const MapCardLayout = ({ position, cursor = 'cursor', children }: PropsWithChildren<MapCardLayoutProps>) => {
  return (
    // <div
    //   className={`absolute w-[130px] h-[130px] rounded-lg bg-white pt-[5px] pb-[6px] px-[16px] shadow-thumb ${position?.x} ${position?.y} overflow-hidden cursor-${cursor}`}
    // >
    <div
      className={`flex flex-col items-center w-full rounded-lg bg-white py-2xs px-[16px] shadow-thumb ${position?.x} ${position?.y}  cursor-${cursor} `}
    >
      {children}
    </div>
  );
};
