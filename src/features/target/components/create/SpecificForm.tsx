'use client';

import { useController, useFieldArray, useFormContext } from 'react-hook-form';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button, Span, Typography } from '@/components/common';
import type { TargetType } from '@/features/target/types';

import { NEW_GOAL_FORM_ORDERS } from '../../constants';

import FormHeader from './FormHeader';
import FormLayout from './FormLayout';
import GoalGuideBottomSheet from './GoalGuideBottomSheet';
import { TextInput } from './TextInput';

export const SpecificForm = () => {
  const overlay = useOverlay();
  const { setValue, getValues, control } = useFormContext<TargetType>();

  const { field } = useController({ name: 'goal', control });
  const { value } = field;
  console.log('etsetset', value);
  const { goal } = getValues();

  return (
    <FormLayout
      header={<FormHeader formNumber={NEW_GOAL_FORM_ORDERS.specific} />}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          {goal} <br /> 를 이루기 위해<Span type="secondary"> 먼저 달성 </Span>
          <br />
          해야할 세부 목표를 생각해볼래?
        </Typography>
      }
      body={
        <div className="mt-xl h-full flex flex-col overflow-hidden overflow-y-scroll">
          <SubGoalSection />
          <RoutineSection />
          <div className="py-4 flex flex-col justify-end grow items-center gap-5xs">
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
      }
      footer={
        <Link href="/target/create/date">
          {/* <Button disabled={value ? value.length !== MAX_DATE_LENGTH_UNTIL_MONTH : true}>다음</Button> */}
          <Button>다음</Button>
        </Link>
      }
    />
  );
};

export const SubGoalSection = () => {
  // const { register, getValues, control } = useFormContext<TargetType>();
  const {
    fields: subGoal,
    // append: subGoalAppend,
    // remove: subGoalRemove,
  } = useFieldArray({
    name: 'subGoal', // unique name for your Field Array
  });

  const isFirstElementIdOfSubGoal = subGoal[0].id;

  return (
    <>
      {subGoal.map((field) => {
        return (
          <div key={field.id} className="pt-4">
            <TextInput
              labelName={isFirstElementIdOfSubGoal === field.id ? '하위 목표' : ''}
              value={'test'}
              maxLength={30}
              placeholder="ex) IT 개발 동아리 시작하기"
              // onChange={onChange}
            />
          </div>
        );
      })}
    </>
  );
};

export const RoutineSection = () => {
  // const { register, getValues, control } = useFormContext<TargetType>();
  const {
    fields: routine,
    // append: routineAppend,
    // remove: routineRemove,
  } = useFieldArray({
    // shouldUnregister: true, 컴포넌트가 사라지면 unRegister이 되도록 !
    name: 'routine', // unique name for your Field Array
  });
  const isFirstElementIdOfRoutine = routine[0].id;
  return (
    <>
      {routine.map((field) => {
        return (
          <div key={field.id} className="pt-4">
            <TextInput
              labelName={isFirstElementIdOfRoutine === field.id ? '루틴 작성' : ''}
              value={'test'}
              maxLength={30}
              placeholder="ex) IT 개발 동아리 시작하기"
              // onChange={onChange}
            />
          </div>
        );
      })}
    </>
  );
};
