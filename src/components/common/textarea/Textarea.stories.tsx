import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'components/common/textarea',
  component: Textarea,
  argTypes: {
    //@ts-expect-error placeholder error, have to solve
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {
    //@ts-expect-error placeholder error, have to solve
    placeholder: 'Text Input',
  },
};
