import type { Meta, StoryObj } from '@storybook/react';

import type { EmptyTargetCard } from '../EmptyTargetCard/EmptyTargetCard';

import { StartMapCard } from './StartMapCard';

const meta: Meta<typeof EmptyTargetCard> = {
  title: 'features/home/mapCard/startMapCard',
  component: StartMapCard,
};

export default meta;

type Story = StoryObj<typeof StartMapCard>;

export const Basic: Story = {
  args: {
    position: { x: 'top-[20px]', y: 'left-[20px]' },
  },
};
