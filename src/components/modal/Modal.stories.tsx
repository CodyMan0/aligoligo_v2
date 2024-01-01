import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

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
