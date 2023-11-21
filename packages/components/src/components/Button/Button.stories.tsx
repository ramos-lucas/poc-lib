import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '../ThemeProvider';
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
  decorators: [
    (Story) => (
      <ThemeProvider theme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
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
