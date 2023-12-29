import { forwardRef, type PropsWithChildren, type ReactNode } from 'react';

import { Typography } from '@/components/common';

interface ContentWrapperProps {
  title: string | ReactNode;
  description?: string;
  sectionStyles?: string;
}

export const ContentWrapper = forwardRef<HTMLElement, PropsWithChildren<ContentWrapperProps>>(
  ({ title, description, sectionStyles = '', children }, ref) => {
    return (
      <section className={sectionStyles} ref={ref}>
        <Typography type="heading1" className="text-main-primaryDark">
          {title}
        </Typography>
        {description && (
          <Typography type="title4" className="mt-[8px] text-gray-40">
            {description}
          </Typography>
        )}
        {children}
      </section>
    );
  },
);

ContentWrapper.displayName = 'ContentWrapper';