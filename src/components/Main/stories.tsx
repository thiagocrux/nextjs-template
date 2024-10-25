import { Meta, StoryObj } from '@storybook/react';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
} as Meta;

export const Default: StoryObj = {};
