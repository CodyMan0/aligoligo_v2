import React from 'react';
import * as Progress from '@radix-ui/react-progress';

export interface ProgressBarProps {
  value: number;
}

export const ProgressBar = ({ value = 10 }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <Progress.Root
        className="relative overflow-hidden bg-gray-20 rounded-full h-[25px]"
        style={{
          transform: 'translateZ(0)',
        }}
        value={value}
      >
        <Progress.Indicator
          className="bg-main-primary-60 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </Progress.Root>
    </div>
  );
};
ProgressBar.displayName = 'ProgressBar';
