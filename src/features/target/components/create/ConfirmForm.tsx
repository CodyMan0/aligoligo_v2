'use client';

// import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Span, Typography } from '@/components/common';
import { TargetCard } from '@/features/components/MapCardCollections';

// import { useGetStickers } from '@/hooks/reactQuery/sticker';
import { NEW_GOAL_FORM_ORDERS } from '../../constants';

import FormHeader from './FormHeader';
import FormLayout from './FormLayout';

export const ConfirmForm = () => {
  //   const { register } = useFormContext<TargetType>();
  //   const [selectedSticker, setSelectedSticker] = useState<number | null>(null);
  //   const { data: stickerData } = useGetStickers();

  //   const handleClickSticker = (id: number) => {
  //     setSelectedSticker(id);
  //     setValue('sticker', id);
  //   };

  return (
    <FormLayout
      header={<FormHeader formNumber={NEW_GOAL_FORM_ORDERS.sticker} />}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          <Span type="blue50">목표</Span>와 그에 따른 <Span type="blue50">하위 목표</Span>
          <br /> 그리고 <Span type="blue50">루틴</Span> 을 확인해줘~
          <br />
          이대로 만들거야?!
          <br />할 수 있어!
        </Typography>
      }
      body={
        <>
          <TargetCard isLinkEnabled={false} />
        </>
      }
      footer={
        <Link href="/home" className="z-[1]">
          {/* <Button disabled={!selectedSticker}>다음</Button> */}
          <Button>목표 생성</Button>
        </Link>
      }
    />
  );
};
