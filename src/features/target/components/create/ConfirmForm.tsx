'use client';

// import { useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Span, Typography } from '@/components/common';

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
          이대로 만들거야?! 가보자구
        </Typography>
      }
      body={
        <div className="absolute h-[50%] inset-x-0 w-full pt-md">
          <div className="absolute w-full h-full bg-white rounded-lg">
            <div className="h-[calc(100%-90px)] my-2xs px-2xs overflow-auto">
              {/* <div {...register('sticker')} className="grid grid-cols-3 gap-3xs"> */}
              {/* {stickerData?.map(({ id, name, url }) => (
                  <button key={id} className="flex flex-col items-center" onClick={() => handleClickSticker(id)}>
                    <div className={`p-5xs rounded-lg ${selectedSticker === id && 'bg-blue-10'}`}>
                      <Image src={url} alt={name} width={150} height={150} priority />
                    </div>
                  </button>
                ))} */}
              {/* </div> */}
            </div>
          </div>
        </div>
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
