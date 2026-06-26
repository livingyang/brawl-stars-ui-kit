import type { Meta, StoryObj } from '@storybook/vue3';
import BsGameTitle from './BsGameTitle.vue';

const meta: Meta<typeof BsGameTitle> = {
  title: 'Basics/BsGameTitle',
  component: BsGameTitle,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'Title text' },
    variant: {
      control: 'select',
      options: ['victory', 'defeat', 'neutral'],
      description: 'Title variant',
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
type Story = StoryObj<typeof BsGameTitle>;

export const Victory: Story = {
  args: {
    text: 'VICTORY',
    variant: 'victory',
  },
};

export const Defeat: Story = {
  args: {
    text: 'DEFEAT',
    variant: 'defeat',
  },
};

export const Neutral: Story = {
  args: {
    text: 'BRAWL',
    variant: 'neutral',
  },
};

export const AllVariants: Story = {
  render: () => ({
    components: { BsGameTitle },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px; background: #1A1A2E; align-items: center;">
        <BsGameTitle text="VICTORY" variant="victory" />
        <BsGameTitle text="DEFEAT" variant="defeat" />
        <BsGameTitle text="BRAWL" variant="neutral" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
