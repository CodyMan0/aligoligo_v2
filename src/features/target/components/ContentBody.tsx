import { Typography } from '@/components/common';
import { Checkbox } from '@/components/common/checkbox';
import { ProgressBar } from '@/components/progress';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const ContentBody = () => {
  const form = useForm();
  const id = 1;
  return (
    <>
      <Typography type="heading1">세부 목표</Typography>
      <Checkbox name="123" label="123" control={form.control} />
      <Checkbox name="1" label="123" control={form.control} />
      <Checkbox name="2" label="123" control={form.control} />
      <Checkbox name="3" label="123" control={form.control} />
      <Checkbox name="4" label="123" control={form.control} />

      <Typography type="heading1">루틴</Typography>
      <Checkbox name="8" label="123" control={form.control} />
      <Checkbox name="9" label="123" control={form.control} />
      <Checkbox name="11" label="123" control={form.control} />

      <div>
        <Typography type="heading1">성공할 수 있어?</Typography>
        <Typography type="title3">n명이 참여함</Typography>
        <ProgressBar value={10} />
      </div>

      <div className="flex flex-col gap-3xs px-xs pb-[25px]">
        <Link href={{ pathname: `/result/${id}` }}>
          <Typography className="text-center text-gray-40 cursor-pointer" type="body3">
            결과 페이지로
          </Typography>
        </Link>
      </div>
    </>
  );
};

export default ContentBody;
