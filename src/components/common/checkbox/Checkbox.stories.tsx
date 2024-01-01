import { useForm, useWatch } from 'react-hook-form';
import { Meta, StoryObj } from '@storybook/react';

import { CheckboxType } from './Checkbox';
import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'components/common/checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// export const Basic: Story = {};

export const Example: Story = {
  args: {
    name: 'test',
    label: '새해 목표 이루기',
  },
  render: function Render(args) {
    const form = useForm();

    return <Checkbox {...args} name="test" control={form.control} />;
  },
};

export const Disabled: Story = {
  args: {
    name: 'test',
    label: '새해 목표 이루기',
    isDisabled: true,
  },
  render: function Render(args) {
    const form = useForm();

    return <Checkbox {...args} name="test" control={form.control} />;
  },
};

export const InForm: Story = {
  args: {
    name: 'test',
    label: '새해 목표 이루기',
    isDisabled: true,
  },
  render: function Render() {
    const { control, getValues } = useForm({
      mode: 'onChange',
      defaultValues: { cheese: true, onions: true, mayo: false },
    });

    useWatch({ control, name: 'cheese' });
    useWatch({ control, name: 'onions' });
    useWatch({ control, name: 'mayo' });

    return (
      <div className="w-56">
        <div className="flex gap-4">
          <Checkbox name="cheese" label="Cheese" control={control} type={CheckboxType.CHECK} />
          <Checkbox name="onions" label="Onions" control={control} type={CheckboxType.CROSS} />
          <Checkbox name="mayo" label="Mayo" control={control} type={CheckboxType.CROSS} />
        </div>
        <pre>
          <code>{JSON.stringify(getValues(), null, 2)}</code>
        </pre>
      </div>
    );
  },
};
