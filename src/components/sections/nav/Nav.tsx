'use client';

import Image from 'next/image';
import { useOverlay } from '@toss/use-overlay';

import LogoImage from '@/assets/images/logo/oli.png';
import { Typography } from '@/components/common';
import NavBottomSheet from '@/features/components/NavBottomSheet';

// TODO : recreate User type when api will be connected
export interface User {
  name: string;
}

interface NavProps {
  user?: User;
}
export const Nav = ({ user }: NavProps) => {
  // const { value, setValue } = useState();
  const overlay = useOverlay();
  console.log('test', user);

  return (
    <div className="flex justify-between items-center w-full h-[60px] px-xs py-xs">
      <div className="flex justify-center items-center w-10 390:w-8">
        <Image
          src={LogoImage}
          alt="nav_image"
          width={100}
          onClick={() => {
            overlay.open(({ isOpen, close }) => {
              return <NavBottomSheet open={isOpen} onClose={close} user={user} />;
            });
          }}
        />
      </div>

      {user ? (
        <Typography type={'subLabel1'} className="">
          {user.name}의 타겟 모음
        </Typography>
      ) : (
        <Typography type={'subLabel1'} className="">
          로고를 눌러 로그인을 해주세요
        </Typography>
      )}
    </div>
  );
};

Nav.displayName = 'Nav';
