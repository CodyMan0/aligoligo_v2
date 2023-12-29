'use client';

import Image from 'next/image';

// import bandiboodiGray from '@/assets/images/bandi-boodi-gray.png';
import oliBodyGray from '@/assets/images/logo/oliBody.png';
import { Typography } from '@/components/common';
import { ProgressBar } from '@/components/progress';

import { MapCardLayout } from '../MapCardLayout';

export const TargetCard = () => {
  return (
    <MapCardLayout cursor="default">
      <Typography type="title2" className="text-gray-50 text-center font-bold">
        제목
      </Typography>
      <Image src={oliBodyGray} width="100" alt="empty_goal" />

      <ProgressBar value={20} />
    </MapCardLayout>
  );
};
