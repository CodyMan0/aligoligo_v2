'use client';

import { useController, useFormContext } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
// import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import Oli from '@/assets/images/logo/oliBody.png';
import { Button, Span, Typography } from '@/components/common';
import { TargetType } from '@/features/target/types';

import { NEW_GOAL_FORM_ORDERS } from '../../constants';

import FormHeader from './FormHeader';
import FormLayout from './FormLayout';
import GoalGuideBottomSheet from './GoalGuideBottomSheet';
import { TextInput } from './TextInput';

// import { NEW_GOAL_FORM_ORDERS } from '../../constants';

const GoalForm = () => {
  const { register, setValue, control } = useFormContext<TargetType>();
  console.log(register, setValue, control);
  const { field } = useController({ name: 'goal', control });
  const { onChange, value } = field;
  const overlay = useOverlay();

  return (
    <FormLayout
      header={<FormHeader formNumber={NEW_GOAL_FORM_ORDERS.goal} />}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          목표를 설정해보자
          <br />
          <Span type="secondary">최상위 목표</Span> 한 가지를 말해줄래?
        </Typography>
      }
      body={
        <>
          <Image className="absolute top-[28%] left-1/3 w-1/3 z-[1]" src={Oli} alt="BandiBoodi Character" priority />
          <div {...register('goal')} className="pt-sm h-full flex flex-col">
            <TextInput
              labelName="최상위 목표"
              value={value}
              maxLength={30}
              placeholder="ex) IT 개발 동아리 시작하기"
              onChange={onChange}
            />
            <div className="pb-lg flex flex-col justify-end grow items-center gap-5xs">
              <Typography type="caption1" className="text-gray-40">
                목표 세우기, 너무 막연하다면?
              </Typography>
              <div className="w-[200px]">
                <Button
                  className="py-3xs px-xs text-sm"
                  variant="green"
                  height="h44"
                  rounded="xl"
                  onClick={() => {
                    overlay.open(({ isOpen, close }) => {
                      return <GoalGuideBottomSheet open={isOpen} onClose={close} setValue={setValue} />;
                    });
                  }}
                >
                  가이드 보고 목표 세우기
                </Button>
              </div>
            </div>
          </div>
        </>
      }
      footer={
        <Link href="/target/create/specific">
          <Button disabled={value ? value.length === 0 : true}>다음</Button>
        </Link>
      }
    />
  );
};

export default GoalForm;
