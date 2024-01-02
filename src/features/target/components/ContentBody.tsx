import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { Typography } from '@/components/common';
import { Checkbox } from '@/components/common/checkbox';
import { Modal } from '@/components/modal';
import { ProgressBar } from '@/components/progress';
import { TargetShareContent } from '@/components/modal/modalContents';

const ContentBody = () => {
  const form = useForm();
  const id = 1;
  return (
    <>
      <div>
        <Typography type="heading2">세부 목표</Typography>
        <div className="flex flex-col gap-3 pt-[8px]">
          <Checkbox name="123" label="123" control={form.control} />
          <Checkbox name="1" label="123" control={form.control} />
          <Checkbox name="56" label="123" control={form.control} />
          <Checkbox name="3" label="123" control={form.control} />
          <Checkbox name="4" label="123" control={form.control} />
        </div>
      </div>
      <div className="pt-xs">
        <Typography type="heading2">루틴</Typography>
        <div className="flex flex-col gap-3 pt-[8px]">
          <Checkbox name="8" label="123" control={form.control} />
          <Checkbox name="9" label="123" control={form.control} />
          <Checkbox name="11" label="123" control={form.control} />
        </div>
      </div>
      <div className="pt-xs">
        <div className="flex justify-between items-center">
          <Typography type="heading2">성공할 수 있어?!</Typography>
          <Typography type={'title5'}>n명</Typography>
        </div>
        <div className="mt-2">
          <ProgressBar value={10} />
        </div>
      </div>

      <div className="pt-lg pb-sm">
        <Link href={{ pathname: `/result/${id}` }}>
          <Typography className="text-center text-gray-40 cursor-pointer" type="body3">
            공유 후, 친구에게 보여질 페이지로 이동
          </Typography>
        </Link>
        <Modal title="목표 공유" buttonName="목표 공유하기" content={<TargetShareContent />} footer={false} />
      </div>
    </>
  );
};

export default ContentBody;
