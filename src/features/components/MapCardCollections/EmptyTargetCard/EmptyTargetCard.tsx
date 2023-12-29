'use client';

import Image from 'next/image';

// import bandiboodiGray from '@/assets/images/bandi-boodi-gray.png';
import oliBodyGray from '@/assets/images/logo/oliBody_gray.png';
import { Typography } from '@/components/common';

import { MapCardLayout, type MapCardLayoutProps } from '../MapCardLayout';

interface EmptyMapCardProps extends MapCardLayoutProps {
  alternativeTextIndex: 0 | 1 | 2 | 3;
}

const EMPTY_ALTERNATIVE_TEXTS = ['나의 3년 후는?', '목표 생각중..', '나는 갓생러 ㅋ', '성공이 뭘까?'];

export const EmptyTargetCard = ({ alternativeTextIndex, position }: EmptyMapCardProps) => {
  return (
    <MapCardLayout position={position} cursor="default">
      <Typography type="title2" className="text-gray-40 text-center font-bold">
        {EMPTY_ALTERNATIVE_TEXTS[alternativeTextIndex]}
      </Typography>
      <Image src={oliBodyGray} width="100" alt="empty_goal" />
    </MapCardLayout>
  );
};
