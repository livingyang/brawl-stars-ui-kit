import type { Meta, StoryObj } from '@storybook/vue3';
import BsWinStreak from './BsWinStreak.vue';

const meta: Meta<typeof BsWinStreak> = {
  title: 'Atoms/BsWinStreak',
  component: BsWinStreak,
  tags: ['autodocs'],
  argTypes: {
    streakNum: { control: 'number', description: 'Win streak count' },
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
type Story = StoryObj<typeof BsWinStreak>;

export const ZeroStreak: Story = {
  args: {
    streakNum: 0,
  },
};

export const ThreeWinStreak: Story = {
  args: {
    streakNum: 3,
  },
};

export const FiveWinStreak: Story = {
  args: {
    streakNum: 5,
  },
};

export const TenWinStreak: Story = {
  args: {
    streakNum: 10,
  },
};

export const StreakExamples: Story = {
  render: () => ({
    components: { BsWinStreak },
    template: `
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsWinStreak :streakNum="0" />
        <BsWinStreak :streakNum="3" />
        <BsWinStreak :streakNum="5" />
        <BsWinStreak :streakNum="10" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
