import type { ReactNode } from 'react';

interface LayoutProps {
  header?: ReactNode;
  graph?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

export const DetailLayout = ({ header, graph, body, footer }: LayoutProps) => {
  return (
    <>
      <div className="absolute w-full 390:h-[330px] h-[480px]  bg-gradient-to-b from-transparent to-[#BACB91]">
        <div className="flex items-center justify-between">{header}</div>
        <div className="flex flex-col items-center justify-center flex-shrink-0 390:h-[272px] h-[352px] rounded-none">
          <div className="absolute 390:w-[227px] 390:h-[227px] w-[333px] h-[333px] bg-[#ffffff66] rounded-xl" />
          {graph}
        </div>
      </div>

      <div className="absolute w-full 390:top-[320px] top-[490px] bg-white rounded-lg pt-3xs ">
        <div className="p-4xs px-sm">{body}</div>
      </div>
      <div className="p-xs absolute w-full bottom-0">{footer}</div>
    </>
  );
};

export default DetailLayout;
