'use client';

import AddIcon from '@/assets/icons/goal/add-icon.svg';
import { Button } from '@/components/common';
import { ContentWrapper } from '@/components/sections/contentWrapper';
import { EmptyTargetCard, TargetCard } from '@/features/components/MapCardCollections';

interface TargetLayout {
  children: React.ReactNode;
}

// export const TargetLayout = ({ children }: TargetLayout) => {
//   return <div>{children}</div>;
// };

const memberData = {
  nickname: '이주영',
};

export const TargetLayout = () => {
  const isGetTarget = true;
  return (
    <section className="px-xs py-md">
      <ContentWrapper
        title={
          <>
            {/* {!memberData?.nickname && (
            <>
              <br />
            </>
          )} */}
            {memberData?.nickname && (
              <>
                {memberData.nickname} 님
                <br />
              </>
            )}
            N개의 목표를 설정하셨고
            <br />
            N개를 이루셨네요!
          </>
        }
      >
        <div className="pt-lg ">
          {isGetTarget ? (
            <div className="flex gap-4 flex-col">
              <TargetCard />
              <TargetCard />
              <TargetCard />
            </div>
          ) : (
            <EmptyTargetCard alternativeTextIndex={1} />
          )}

          <Button variant={'heavy'} className="mt-8 ">
            <AddIcon />
          </Button>
        </div>
      </ContentWrapper>
    </section>
  );
};
