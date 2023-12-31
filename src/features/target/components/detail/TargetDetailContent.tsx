'use client';

import { useRouter } from 'next/navigation';

import { ChartWidget } from '@/components/chart';

// import { Modal } from '@/components/modal';
import ContentBody from './ContentBody';
import DetailHeader from './DetailHeader';
import DetailLayout from './TargetDetailLayout';

const TargetDetailContent = ({ id }: { id: number }) => {
  const router = useRouter();

  console.log(id, router);

  return (
    <DetailLayout
      header={<DetailHeader />}
      graph={<ChartWidget />}
      body={<ContentBody />}
      // footer={<Modal buttonName="공유" />}
    />
  );
};

export default TargetDetailContent;
