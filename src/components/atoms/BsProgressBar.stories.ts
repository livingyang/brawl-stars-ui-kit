import type { Meta, StoryObj } from '@storybook/vue3';
import BsProgressBar from './BsProgressBar.vue';

const meta: Meta<typeof BsProgressBar> = {
  title: 'Atoms/BsProgressBar',
  component: BsProgressBar,
  tags: ['autodocs'],
  argTypes: {
    current: { control: 'number', description: 'Current value' },
    max: { control: 'number', description: 'Max value' },
    color: {
      control: 'select',
      options: ['yellow', 'blue', 'red', 'green'],
      description: 'Progress bar color',
    },
    showText: { control: 'boolean', description: 'Show text value' },
  },
  parameters: {
    layout: 'padded',
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
type Story = StoryObj<typeof BsProgressBar>;

export const Default: Story = {
  args: {
    current: 650,
    max: 1000,
    color: 'yellow',
    showText: true,
  },
};

export const Blue: Story = {
  args: {
    current: 75,
    max: 100,
    color: 'blue',
    showText: true,
  },
};

export const Red: Story = {
  args: {
    current: 25,
    max: 100,
    color: 'red',
    showText: true,
  },
};

export const Green: Story = {
  args: {
    current: 80,
    max: 100,
    color: 'green',
    showText: true,
  },
};

export const WithoutText: Story = {
  args: {
    current: 45,
    max: 100,
    color: 'yellow',
    showText: false,
  },
};

export const ProgressExamples: Story = {
  render: () => ({
    components: { BsProgressBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E; width: 400px;">
        <BsProgressBar :current="650" :max="1000" color="yellow" />
        <BsProgressBar :current="75" :max="100" color="blue" />
        <BsProgressBar :current="25" :max="100" color="red" />
        <BsProgressBar :current="80" :max="100" color="green" />
        <BsProgressBar :current="45" :max="100" color="yellow" :showText="false" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
