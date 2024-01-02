'use client';

import { useController, useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Span, Typography } from '@/components/common';
import { MAX_DATE_LENGTH_UNTIL_MONTH } from '@/constants';
import type { TargetType } from '@/features/target/types';

import { NEW_GOAL_FORM_ORDERS } from '../../constants';

// import { DateInput } from './DateInput';
import FormHeader from './FormHeader';
import FormLayout from './FormLayout';

export const SpecificForm = () => {
  const { register, getValues, control } = useFormContext<TargetType>();
  const { field } = useController({ name: 'goal', control });
  const { value } = field;
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
        <div {...register('subGoal')} className="pt-sm">
          {/* <DateInput maxLength={MAX_DATE_LENGTH_UNTIL_MONTH} onChange={onChange} /> */}
        </div>
      }
      footer={
        <Link href="/goal/new/tag">
          <Button disabled={value ? value.length !== MAX_DATE_LENGTH_UNTIL_MONTH : true}>다음</Button>
        </Link>
      }
    />
  );
};
