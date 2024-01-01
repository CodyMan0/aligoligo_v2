import type { Meta, StoryObj } from '@storybook/react';

import { ChartWidget } from './ChartWidget';

const meta: Meta<typeof ChartWidget> = {
  title: 'Components/ChartWidget',
  component: ChartWidget,
};

export default meta;

type Story = StoryObj<typeof ChartWidget>;

export const Line: Story = {};
