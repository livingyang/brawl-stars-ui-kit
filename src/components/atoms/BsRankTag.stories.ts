import type { Meta, StoryObj } from '@storybook/vue3';
import BsRankTag from './BsRankTag.vue';

const meta: Meta<typeof BsRankTag> = {
  title: 'Basics/BsRankTag',
  component: BsRankTag,
  tags: ['autodocs'],
  argTypes: {
    rank: { control: 'text', description: 'Rank number' },
    variant: {
      control: 'select',
      options: ['victory', 'defeat'],
      description: 'Victory or defeat variant',
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
type Story = StoryObj<typeof BsRankTag>;

export const Victory: Story = {
  args: {
    rank: 1,
    variant: 'victory',
  },
};

export const Defeat: Story = {
  args: {
    rank: 6,
    variant: 'defeat',
  },
};

export const RankExamples: Story = {
  render: () => ({
    components: { BsRankTag },
    template: `
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsRankTag rank="#1" variant="victory" />
        <BsRankTag rank="#3" variant="victory" />
        <BsRankTag rank="#6" variant="defeat" />
        <BsRankTag rank="#12" variant="defeat" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
