'use client';

import StarSVG from '@/assets/icons/home/star.svg';

interface StarProps {
  position: { x: string; y: string };
  size: number;
  color?: 'white' | 'blue' | 'green' | 'lightGreen';
}

const palette = {
  white: '#fff',
  blue: '#BAE0FF', // blue-20
  green: '#52681D',
  lightGreen: '#BACB91',
};

export const Star = ({ position, size, color = 'white' }: StarProps) => {
  return (
    <span className={`absolute w-fit h-fit inset-y-0 ${position.x} ${position.y}`}>
      <StarSVG width={size} height={size} fill={palette[color]} />
    </span>
  );
};
