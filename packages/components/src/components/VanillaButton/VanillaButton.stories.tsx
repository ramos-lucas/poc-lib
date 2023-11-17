import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '../ThemeProvider';
import { VanillaButton } from './VanillaButton';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof VanillaButton> = {
  title: 'Example/VanillaButton',
  component: VanillaButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [
    (Story) => (
      <ThemeProvider theme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Teste',
  },
};
