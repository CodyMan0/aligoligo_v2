'use client';

import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/assets/images/logo/logo.png';
import SplashBandiboodi from '@/assets/images/logo/oliBody.png';
// import PurpleBlurImage from '@/assets/images/purple-blur.png';
import { Typography } from '@/components/common';
import { GoogleLoginButton } from '@/features/auth/components/GoogleLoginButton';
import { KakaoLoginButton } from '@/features/auth/components/KakaoLoginButton';

import StarBg from './home/startBg';
// import { GoogleLoginButton } from '@/features/auth/components';

const SplashPage = () => {
  return (
    <div className="relative w-full h-[100dvh] flex flex-col items-center overflow-hidden">
      {/* <div className="absolute top-0 right-0">
        <Image src={PurpleBlurImage} sizes="100vw" alt="blur_image" />
      </div> */}
      <StarBg />
      <div className="h-[38vh] flex flex-col gap-[1vh] z-10 justify-center">
        <Typography type="heading2" className="text-center bg-clip-text bg-gradient4 text-main-primaryDark">
          목표 달성을 <br /> 알리고 올리고
        </Typography>
        <Image src={LogoImage} width={320} height={160} alt="logo" priority />
      </div>

      <div className="absolute top-60 390:w-[50%] 390:top-44 flex justify-center">
        <Image src={SplashBandiboodi} width={220} alt="splash_bandiboodi" priority />
      </div>
      <div className="w-full h-[80vh] bg-gradient6 flex flex-col items-center">
        <div className="absolute bottom-[10px] w-full flex flex-col gap-3xs px-xs pb-[25px]">
          <GoogleLoginButton />
          <KakaoLoginButton />
          <Typography className="text-center text-white" type="body3">
            회원가입 시{' '}
            <Link className=" underline" href="/">
              서비스 이용약관
            </Link>
            과 <br />{' '}
            <Link className="underline" href="/">
              개인정보 수집 및 이용
            </Link>
            에 동의하게 됩니다.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
