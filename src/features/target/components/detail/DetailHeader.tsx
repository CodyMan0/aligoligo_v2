'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import CloseIcon from '@/assets/icons/goal/close-icon.svg';

const DetailHeader = () => {
  const router = useRouter();
  const handleClickBackButton = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center w-full ">
      <button onClick={handleClickBackButton}>
        <BackIcon />
      </button>

      <Link href={{ pathname: '/home' }}>
        <CloseIcon />
      </Link>
    </div>
  );
};

export default DetailHeader;
