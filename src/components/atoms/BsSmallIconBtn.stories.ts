import type { Meta, StoryObj } from '@storybook/vue3';
import BsSmallIconBtn from './BsSmallIconBtn.vue';

const meta: Meta<typeof BsSmallIconBtn> = {
  title: 'Basics/BsSmallIconBtn',
  component: BsSmallIconBtn,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text', description: 'Custom icon emoji' },
    variant: {
      control: 'select',
      options: ['settings', 'back', 'close', 'info'],
      description: 'Button variant',
    },
    active: { control: 'boolean', description: 'Active state' },
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
type Story = StoryObj<typeof BsSmallIconBtn>;

export const Settings: Story = {
  args: {
    variant: 'settings',
    active: false,
  },
};

export const Back: Story = {
  args: {
    variant: 'back',
    active: false,
  },
};

export const Close: Story = {
  args: {
    variant: 'close',
    active: false,
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    active: false,
  },
};

export const Active: Story = {
  args: {
    variant: 'settings',
    active: true,
  },
};

export const AllVariants: Story = {
  render: () => ({
    components: { BsSmallIconBtn },
    template: `
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsSmallIconBtn variant="settings" />
        <BsSmallIconBtn variant="back" />
        <BsSmallIconBtn variant="close" />
        <BsSmallIconBtn variant="info" />
        <BsSmallIconBtn variant="settings" :active="true" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
