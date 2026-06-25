import type { Meta, StoryObj } from '@storybook/vue3';
import BsBadge from './BsBadge.vue';

const meta: Meta<typeof BsBadge> = {
  title: 'Atoms/BsBadge',
  component: BsBadge,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Badge value' },
    variant: {
      control: 'select',
      options: ['positive', 'negative', 'neutral'],
      description: 'Badge variant',
    },
    prefix: { control: 'text', description: 'Value prefix' },
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
type Story = StoryObj<typeof BsBadge>;

export const Positive: Story = {
  args: {
    value: 500,
    variant: 'positive',
    prefix: '+',
  },
};

export const Negative: Story = {
  args: {
    value: 100,
    variant: 'negative',
    prefix: '-',
  },
};

export const Neutral: Story = {
  args: {
    value: 1250,
    variant: 'neutral',
  },
};

export const TrophyCount: Story = {
  args: {
    value: '#1',
    variant: 'positive',
  },
};

export const AllVariants: Story = {
  render: () => ({
    components: { BsBadge },
    template: `
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsBadge :value="500" variant="positive" prefix="+" />
        <BsBadge :value="100" variant="negative" prefix="-" />
        <BsBadge :value="1250" variant="neutral" />
        <BsBadge value="#1" variant="positive" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
