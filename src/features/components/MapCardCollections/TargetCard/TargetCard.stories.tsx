import type { Meta, StoryObj } from '@storybook/react';

import { TargetCard } from './TargetCard';

const meta: Meta<typeof TargetCard> = {
  title: 'features/home/TargetCard/TargetCard',
  component: TargetCard,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TargetCard>;

export const Basic: Story = {};
