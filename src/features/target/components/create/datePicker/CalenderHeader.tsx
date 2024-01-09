// import { monthFormatDate } from '../../../utils/formatDate';
// import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import dayjs from 'dayjs';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import NextIcon from '@/assets/icons/goal/next-icon.svg';
import { Typography } from '@/components/common';

interface Props {
  date: Date;
  decreaseMonth(): void;
  increaseMonth(): void;
}

const CalenderHeader = ({ date, decreaseMonth, increaseMonth }: Props) => {
  const dateToString = dayjs(date).format('YYYY년 MM월 DD일');

  return (
    <div className="p-2 flex justify-evenly items-center ">
      <button type="button" onClick={decreaseMonth}>
        <BackIcon />
      </button>
      <Typography type="title1">{dateToString}</Typography>
      <button type="button" onClick={increaseMonth} className="">
        <NextIcon />
      </button>
    </div>
  );
};

export default CalenderHeader;
