'use client';

import Link from 'next/link';

import KakaoIcon from '@/assets/icons/kakao-icon.svg';
import { Button } from '@/components/common';

export const KakaoLoginButton = () => {
  return (
    <Link href={'#'}>
      <Button variant={'green'}>
        <KakaoIcon width={24} alt="kakao-logo" />
        카카오톡 로그인
      </Button>
    </Link>
  );
};
