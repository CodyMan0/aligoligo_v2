import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { useIsMounted } from '@/hooks/useIsMounted';

import type { TargetType } from '../types';

const CreateGoalFormProvider = ({ children }: PropsWithChildren) => {
  const isMounted = useIsMounted();

  const methods = useForm<TargetType>();

  const submit = (data: TargetType) => {
    // TODO: 불필요한 submit이 호출되는 문제 해결 필요
    console.log('test', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>

      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default CreateGoalFormProvider;
