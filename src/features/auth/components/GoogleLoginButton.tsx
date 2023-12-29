'use client';

import Link from 'next/link';

import GoogleIcon from '@/assets/icons/google-icon.svg';
import { Button } from '@/components/common';

export const GoogleLoginButton = () => {
  return (
    <Link href={'#'}>
      <Button>
        <GoogleIcon width={24} alt="google-logo" />
        Google 로그인
      </Button>
    </Link>
  );
};
