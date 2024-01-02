import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { TargetShareContent } from './modalContents';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  args: {
    buttonName: '기본',
  },
};

export const WithInput: Story = {
  args: {
    buttonName: 'WithInput',
  },
};

export const WithCheckbox: Story = {
  args: {
    buttonName: 'withCheckbox',
  },
};

export const WithCopyCliboard: Story = {
  args: {
    buttonName: 'WithCopyCliboard',
  },
};

export const TargetSharingModal: Story = {
  args: {
    title: '목표 공유',
    buttonName: '목표 공유하기',
    content: <TargetShareContent />,
  },
};
