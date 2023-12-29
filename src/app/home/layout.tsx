import type { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative flex justify-center bg-gradient5">
      {/* <div className="absolute right-0">
        <Image src={PurpleBlurImage} width={390} height={125} alt="purple_blur" />
      </div> */}
      <div className="w-full h-[100dvh]">{children}</div>
    </main>
  );
};

export default HomeLayout;
