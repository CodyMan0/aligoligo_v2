'use client';

import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import DeleteIcon from '@/assets/icons/goal/delete-icon.svg';
import { useOverlay } from '@toss/use-overlay';
import NavBottomSheet from '@/features/components/NavBottomSheet';

const DetailHeader = () => {
  const router = useRouter();
  const overlay = useOverlay();
  const handleClickBackButton = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center w-full ">
      <button onClick={handleClickBackButton}>
        <BackIcon />
      </button>

      {/* <Link href={{ pathname: '/home' }}>
        <DeleteIcon />
      </Link> */}
      {/* {goalId && ( */}

      <button
        // disabled={!goalId}
        onClick={() => {
          overlay.open(({ isOpen, close }) => {
            return <NavBottomSheet open={isOpen} onClose={close} />;
          });
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default DetailHeader;
