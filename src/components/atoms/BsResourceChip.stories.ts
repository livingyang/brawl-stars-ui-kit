import type { Meta, StoryObj } from '@storybook/vue3';
import BsResourceChip from './BsResourceChip.vue';

const meta: Meta<typeof BsResourceChip> = {
  title: 'Basics/BsResourceChip',
  component: BsResourceChip,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text', description: 'Resource icon emoji' },
    value: { control: 'text', description: 'Current value' },
    maxValue: { control: 'text', description: 'Max value (optional)' },
    variant: {
      control: 'select',
      options: ['coins', 'gems', 'powerpoints', 'starrrops'],
      description: 'Resource type',
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
type Story = StoryObj<typeof BsResourceChip>;

export const Coins: Story = {
  args: {
    icon: '🪙',
    value: 2500,
    variant: 'coins',
  },
};

export const Gems: Story = {
  args: {
    icon: '💎',
    value: 50,
    variant: 'gems',
  },
};

export const PowerPoints: Story = {
  args: {
    icon: '⚡',
    value: '240/300',
    variant: 'powerpoints',
  },
};

export const AllResources: Story = {
  render: () => ({
    components: { BsResourceChip },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsResourceChip icon="🪙" :value="2500" variant="coins" />
        <BsResourceChip icon="💎" :value="50" variant="gems" />
        <BsResourceChip icon="⚡" :value="240" :maxValue="300" variant="powerpoints" />
        <BsResourceChip icon="🌟" :value="12" variant="starrrops" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
