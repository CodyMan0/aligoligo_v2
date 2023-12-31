'use client';
import React from 'react';

import TargetDetailContent from '@/features/target/components/TargetDetailContent';

interface ParamsProps {
  params: {
    id: string;
  };
}

const TargetDetailPage = ({ params }: ParamsProps) => {
  const id = +params['id'];
  return <TargetDetailContent id={id} />;
};

export default TargetDetailPage;
