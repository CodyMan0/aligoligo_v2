import type { Meta, StoryObj } from '@storybook/react';

import { DefaultLayout } from './DefaultLayout';

const meta: Meta<typeof DefaultLayout> = {
  title: 'components/layouts/DefaultLayout',
  component: DefaultLayout,
};

export default meta;

type Story = StoryObj<typeof DefaultLayout>;

export const Basic: Story = {};
