'use client';

import { useController, useFormContext } from 'react-hook-form';
import Link from 'next/link';

import { Button, Span, Typography } from '@/components/common';
import { MAX_DATE_LENGTH_UNTIL_MONTH } from '@/constants';

import { NEW_GOAL_FORM_ORDERS } from '../../constants';
import { TargetType } from '../../types';

import { DateInput } from './DateInput';
import FormHeader from './FormHeader';
import FormLayout from './FormLayout';

export const DateForm = () => {
  const { register, getValues, control } = useFormContext<TargetType>();
  const { field } = useController({ name: 'startDate', control });
  const { onChange } = field;
  const { goal } = getValues();

  return (
    <FormLayout
      header={<FormHeader formNumber={NEW_GOAL_FORM_ORDERS.date} />}
      comment={
        <Typography type="title3" className="text-gray-50 font-insungit text-center">
          {goal} <br /> <Span type="blue50">언제</Span>까지 이루고 싶어?
        </Typography>
      }
      body={
        <div {...register('startDate')} className="pt-lg">
          <DateInput maxLength={MAX_DATE_LENGTH_UNTIL_MONTH} onChange={onChange} />
        </div>
      }
      footer={
        <Link href="/target/create/confirm">
          {/* <Button disabled={value ? value.length !== MAX_DATE_LENGTH_UNTIL_MONTH : true}>다음</Button> */}
          <Button>다음</Button>
        </Link>
      }
    />
  );
};
