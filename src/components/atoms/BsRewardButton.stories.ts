import type { Meta, StoryObj } from '@storybook/vue3';
import BsRewardButton from './BsRewardButton.vue';

const meta: Meta<typeof BsRewardButton> = {
  title: 'Basics/BsRewardButton',
  component: BsRewardButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Button label text' },
    locked: { control: 'boolean', description: 'Locked state' },
    glow: { control: 'boolean', description: 'Glow animation effect' },
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
type Story = StoryObj<typeof BsRewardButton>;

export const Default: Story = {
  args: {
    label: 'CLAIM',
    locked: false,
    glow: false,
  },
};

export const Locked: Story = {
  args: {
    label: 'UNLOCK',
    locked: true,
    glow: false,
  },
};

export const GlowEffect: Story = {
  args: {
    label: 'CLAIM',
    locked: false,
    glow: true,
  },
};

export const AllStates: Story = {
  render: () => ({
    components: { BsRewardButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Default</h3>
          <BsRewardButton label="CLAIM" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Locked</h3>
          <BsRewardButton label="UNLOCK" :locked="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">With Glow Animation</h3>
          <BsRewardButton label="CLAIM" :glow="true" />
        </div>
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
