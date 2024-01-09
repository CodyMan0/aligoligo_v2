'use client';

import Image from 'next/image';
import Link from 'next/link';

// import bandiboodiGray from '@/assets/images/bandi-boodi-gray.png';
import oliBodyGray from '@/assets/images/logo/oliBody.png';
import { Typography } from '@/components/common';
import { ProgressBar } from '@/components/progress';

import { MapCardLayout } from '../MapCardLayout';

export const TargetCard = ({ isLinkEnabled = true }: { isLinkEnabled: boolean }) => {
  // Todo temp number
  const id = 1;

  const cardContent = (
    <MapCardLayout cursor="default">
      <Typography type="title2" className="text-gray-50 text-center font-bold">
        제목
      </Typography>
      <Image src={oliBodyGray} width="100" alt="empty_goal" />
      <ProgressBar value={20} />
    </MapCardLayout>
  );

  return isLinkEnabled ? <Link href={{ pathname: `/target/detail/${id}` }}>{cardContent}</Link> : cardContent;
};
