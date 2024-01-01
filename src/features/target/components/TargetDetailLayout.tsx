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
      <div className="absolute w-full h-[330px] bg-gradient-to-b from-transparent to-[#BACB91]">
        <div className="flex items-center justify-between">{header}</div>
        <div className="flex flex-col items-center justify-center flex-shrink-0 h-[272px] rounded-none">
          <div className="absolute w-[227px] h-[227px] bg-[#ffffff66] rounded-xl" />
          {graph}
        </div>
      </div>

      <div className="absolute w-full top-[320px] bg-white rounded-lg pt-3xs">
        <div className="p-4xs px-sm">{body}</div>
      </div>
      <div className="p-xs absolute w-full bottom-0">{footer}</div>
    </>
  );
};

export default DetailLayout;
