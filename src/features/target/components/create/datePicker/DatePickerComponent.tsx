'use client';

import ReactDatePicker from 'react-datepicker';
import { useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';

import CalenderHeader from './CalenderHeader';

import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  endDate: string;
};

const DatePickerComponent = ({ endDate }: Props) => {
  const endDatetoDate = dayjs(endDate).toDate();

  const getDayName = (date: Date) => {
    return date
      .toLocaleDateString('ko-KR', {
        weekday: 'long',
      })
      .substr(0, 1);
  };
  const createDate = (date: Date) => {
    return new Date(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0));
  };

  const { register, setValue } = useFormContext();
  return (
    <ReactDatePicker
      dateFormat={`yyyy년 MM월 dd일`}
      className="p-3xs flex w-full rounded-md bg-white placeholder-gray-30 border border-gray-20 shadow-thumb\
      focus-visible:border-main-priamry-30
      focus-visible:outline-none"
      {...register('endDate')}
      onChange={(date) => setValue('endDate', date, { shouldValidate: true })}
      selected={endDatetoDate || ''}
      placeholderText="언제까지 달성하시고 싶으세요?"
      isClearable
      withPortal
      minDate={new Date()}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <CalenderHeader date={date} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth} />
      )}
      dayClassName={(date) =>
        getDayName(createDate(date)) === '토' ? 'saturday' : getDayName(createDate(date)) === '일' ? 'sunday' : null
      }
    />
  );
};

export default DatePickerComponent;
