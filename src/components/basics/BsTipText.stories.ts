import type { Meta, StoryObj } from '@storybook/vue3';
import BsTipText from './BsTipText.vue';

const meta: Meta<typeof BsTipText> = {
  title: 'Basics/BsTipText',
  component: BsTipText,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'Tip text content' },
    icon: { control: 'text', description: 'Tip icon emoji' },
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
type Story = StoryObj<typeof BsTipText>;

export const Default: Story = {
  args: {
    text: 'Tip: Push enemies into traps!',
    icon: '💡',
  },
};

export const Warning: Story = {
  args: {
    text: 'Warning: High difficulty ahead',
    icon: '⚠️',
  },
};

export const Info: Story = {
  args: {
    text: 'New brawler available!',
    icon: '📢',
  },
};

export const CustomIcon: Story = {
  args: {
    text: 'Press SPACE to dodge',
    icon: '🎮',
  },
};

export const VariousTips: Story = {
  render: () => ({
    components: { BsTipText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsTipText text="Tip: Push enemies into traps!" icon="💡" />
        <BsTipText text="Warning: High difficulty ahead" icon="⚠️" />
        <BsTipText text="New brawler available!" icon="📢" />
        <BsTipText text="Press SPACE to dodge" icon="🎮" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
