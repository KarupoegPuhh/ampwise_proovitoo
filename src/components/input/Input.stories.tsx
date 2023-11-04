import type { Meta, StoryObj } from '@storybook/react';

import Input, { InputType } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Demo: Story = {
  args: { type: InputType.Selector, values: ["rabarber", "õun", "banaan"], label: 'label' },
};
