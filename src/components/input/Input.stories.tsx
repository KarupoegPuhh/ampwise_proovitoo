import type { Meta, StoryObj } from '@storybook/react';

import Input, { InputType } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    type: {
      options: ['Selector', 'Text', 'Percentage'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputDemo: Story = {
  render: (args) => {
    const { type } = args;
    return <Input {...args} type={getType(type)}/>;
  },
  args: { type: InputType.Selector, values: ["rabarber", "õun", "banaan"], label: 'label' },
};

const getType = (type: any) => {
  switch (type) {
    case 'Selector':
      return InputType.Selector;
    case 'Text':
      return InputType.TextField;
    case 'Percentage':
      return InputType.PrecentageField;
    default:
      return InputType.PrecentageField
  }
};
