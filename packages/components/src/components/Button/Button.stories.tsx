import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { buttonVariants, defaultProps } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  args: {
    children: 'Label',
    disabled: false,
  },
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    variant: {
      defaultValue: defaultProps.variant,
      options: buttonVariants,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
  },
};

export const Accent: StoryObj<typeof Button> = {
  args: {
    variant: 'accent',
  },
};

export const Ghost: StoryObj<typeof Button> = {
  args: {
    variant: 'ghost',
  },
};
