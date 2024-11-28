import { Meta, StoryObj } from '@storybook/react';

import Main, { Props } from '.';

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      type: 'string',
      description: 'The component title',
    },
    description: {
      type: 'string',
      description: 'The component description',
    },
  },
} as Meta;

type Story = StoryObj<typeof Main>;

export const Default: Story = (args: Props) => <Main {...args} />;

Default.args = {
  title: 'Lorem Ipsum',
  description:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
