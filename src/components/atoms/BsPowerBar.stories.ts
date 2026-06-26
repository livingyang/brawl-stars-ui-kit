import type { Meta, StoryObj } from '@storybook/vue3';
import BsPowerBar from './BsPowerBar.vue';

const meta: Meta<typeof BsPowerBar> = {
  title: 'Basics/BsPowerBar',
  component: BsPowerBar,
  tags: ['autodocs'],
  argTypes: {
    segments: { control: 'object', description: 'Array of boolean for each segment' },
    isMax: { control: 'boolean', description: 'Max power state' },
    starLevel: { control: 'number', description: 'Star level (0-3)' },
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
type Story = StoryObj<typeof BsPowerBar>;

export const PartialPower: Story = {
  args: {
    segments: [true, true, false, false, false, false, false, false, false, false],
    isMax: false,
    starLevel: 0,
  },
};

export const MidPower: Story = {
  args: {
    segments: [true, true, true, true, true, false, false, false, false, false],
    isMax: false,
    starLevel: 0,
  },
};

export const AlmostMax: Story = {
  args: {
    segments: [true, true, true, true, true, true, true, true, true, false],
    isMax: false,
    starLevel: 0,
  },
};

export const MaxPower: Story = {
  args: {
    segments: [true, true, true, true, true, true, true, true, true, true],
    isMax: true,
    starLevel: 1,
  },
};

export const MaxWithStars: Story = {
  args: {
    segments: [true, true, true, true, true, true, true, true, true, true],
    isMax: true,
    starLevel: 3,
  },
};

export const PowerLevels: Story = {
  render: () => ({
    components: { BsPowerBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 40px; background: #1A1A2E;">
        <BsPowerBar :segments="[true, false, false, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="1" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="3" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
