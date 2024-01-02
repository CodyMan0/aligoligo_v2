import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '../common';

export interface ModalProps {
  buttonName: string;
  title?: string;
  Description?: string | ReactNode;
  content: ReactNode;
  footer?: boolean;
}

export const Modal = ({ buttonName, content, title, Description, footer = true }: ModalProps) => {
  return (
    <div className="w-full">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant={'tertiary'} className="">
            {buttonName}
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            {title && <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium pb-xs">{title}</Dialog.Title>}
            {Description && (
              <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                {Description}
              </Dialog.Description>
            )}
            <div className="mb-[15px] flex items-center gap-5">{content}</div>

            {footer && (
              <>
                <div className="mt-[25px] flex justify-end">
                  <Dialog.Close asChild>
                    <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                      Save changes
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                  ></button>
                </Dialog.Close>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
Modal.displayName = 'Modal';
