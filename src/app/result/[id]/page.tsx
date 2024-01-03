'use client';
import React from 'react';

import TargetResultContent from '@/features/target/components/result/TargetResultContent';

interface ParamsProps {
  params: {
    id: string;
  };
}

const TargetDetailPage = ({ params }: ParamsProps) => {
  const id = +params['id'];
  return <TargetResultContent id={id} />;
};

export default TargetDetailPage;
