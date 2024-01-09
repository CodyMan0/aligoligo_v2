'use client';

import type { PropsWithChildren } from 'react';

// import { TargetCard } from '@/features/components/MapCardCollections';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[calc(100dvh-24px)]">{children}</div>
    </>
  );
};

export default Layout;

// 'use client';

// import type { ReactNode } from 'react';
// import Image from 'next/image';

// import SpeechBubble from '@/assets/images/bg-speech-bubble.svg';
// import Stars from '@/assets/images/bg-stars.svg';
// import Oli from '@/assets/images/logo/oliBody.png';
// import { TargetCard } from '@/features/components/MapCardCollections';
// import CreateGoalFormProvider from '@/features/target/contexts/CreateGoalFormProvider';

// interface Prop {
//   children: ReactNode;
//   isLastPage: boolean;
// }

// const Layout = ({ children, isLastPage = false }: Prop) => {
//   return (
//     <CreateGoalFormProvider>
//       <div className="w-full h-screen bg-gradient5 relative">
//         <SpeechBubble className="absolute top-[-4%] w-full" />
//         <Stars className="absolute top-[28%] left-1/4 w-1/2" color="green" />
//         {isLastPage ? (
//           <TargetCard />
//         ) : (
//           <Image className="absolute top-[28%] left-1/3 w-1/3 z-[1]" src={Oli} alt="BandiBoodi Character" priority />
//         )}

//         <div className="absolute top-0 left-0 w-full h-[calc(100dvh-24px)]">{children}</div>
//       </div>
//     </CreateGoalFormProvider>
//   );
// };

// export default Layout;
