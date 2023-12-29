import type { Meta, StoryObj } from '@storybook/react';

import { EmptyTargetCard } from './EmptyTargetCard';

const meta: Meta<typeof EmptyTargetCard> = {
  title: 'features/home/TargetCard/emptyTargetCard',
  component: EmptyTargetCard,
  argTypes: {
    alternativeTextIndex: {
      control: 'inline-radio',
      options: [0, 1, 2, 3],
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyTargetCard>;

export const Basic: Story = {
  args: {
    alternativeTextIndex: 1,
    position: { x: 'top-[20px]', y: 'left-[20px]' },
  },
};
