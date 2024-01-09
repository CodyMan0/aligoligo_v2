'use client';

import type { PropsWithChildren } from 'react';
import Image from 'next/image';

import Oli from '@/assets/images/logo/oliBody.png';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Image className="absolute top-[28%] left-1/3 w-1/3 z-[1]" src={Oli} alt="BandiBoodi Character" priority />
      {children}
    </>
  );
};

export default Layout;
