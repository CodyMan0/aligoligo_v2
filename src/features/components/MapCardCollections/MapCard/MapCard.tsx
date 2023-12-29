import Image from 'next/image';
import Link from 'next/link';

import VerticalBarIcon from '@/assets/icons/vertical-bar.svg';
import { Typography } from '@/components/common';
import { blueDataURL } from '@/constants';

import { MapCardLayout, type MapCardLayoutProps } from '../MapCardLayout';

// todo API 형태에 맞춰 Type 지정하기
// todo 임시
export type GoalProps = {
  id: number;
  deadline: string;
  stickerUrl: string;
  tagContent: string;
};

export interface MapCardProps extends MapCardLayoutProps {
  goal: GoalProps;
}

export const MapCard = ({ goal, position }: MapCardProps) => {
  const { id, stickerUrl, deadline, tagContent } = goal;

  return (
    <Link href={{ pathname: `/goal/detail/${id}` }}>
      <MapCardLayout position={position}>
        <Image
          src={stickerUrl}
          width={100}
          height={100}
          alt="sticker"
          priority
          placeholder="blur"
          blurDataURL={blueDataURL.mapCard}
        />
        <div className="flex gap-[4px] justify-center items-center">
          <Typography type="title5" className="text-blue-50">
            {deadline}
          </Typography>
          <VerticalBarIcon width="1" height="11" />
          <Typography type="title5" className="text-blue-50">
            {tagContent}
          </Typography>
        </div>
      </MapCardLayout>
    </Link>
  );
};
