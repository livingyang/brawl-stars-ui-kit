import type { Meta, StoryObj } from '@storybook/vue3';
import BsDividerLine from './BsDividerLine.vue';

const meta: Meta<typeof BsDividerLine> = {
  title: 'Basics/BsDividerLine',
  component: BsDividerLine,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number', description: 'Line width in pixels' },
    hasEndDot: { control: 'boolean', description: 'Show end dot decoration' },
    variant: {
      control: 'select',
      options: ['yellow', 'blue', 'gray'],
      description: 'Line color variant',
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1A1A2E' },
        { name: 'light', value: '#F5F5F5' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BsDividerLine>;

export const Default: Story = {
  args: {
    width: 400,
    hasEndDot: false,
    variant: 'yellow',
  },
};

export const WithEndDot: Story = {
  args: {
    width: 400,
    hasEndDot: true,
    variant: 'yellow',
  },
};

export const Blue: Story = {
  args: {
    width: 300,
    hasEndDot: false,
    variant: 'blue',
  },
};

export const Gray: Story = {
  args: {
    width: 200,
    hasEndDot: true,
    variant: 'gray',
  },
};

export const VariousLengths: Story = {
  render: () => ({
    components: { BsDividerLine },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsDividerLine :width="600" variant="yellow" />
        <BsDividerLine :width="400" variant="yellow" :hasEndDot="true" />
        <BsDividerLine :width="300" variant="blue" />
        <BsDividerLine :width="200" variant="gray" :hasEndDot="true" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
