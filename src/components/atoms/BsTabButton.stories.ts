import type { Meta, StoryObj } from '@storybook/vue3';
import BsTabButton from './BsTabButton.vue';

const meta: Meta<typeof BsTabButton> = {
  title: 'Atoms/BsTabButton',
  component: BsTabButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Tab label text' },
    active: { control: 'boolean', description: 'Active state' },
    disabled: { control: 'boolean', description: 'Disabled state' },
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
type Story = StoryObj<typeof BsTabButton>;

export const Default: Story = {
  args: {
    label: 'BRAWLERS',
    active: false,
    disabled: false,
  },
};

export const Active: Story = {
  args: {
    label: 'BRAWLERS',
    active: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'BRAWLERS',
    active: false,
    disabled: true,
  },
};

export const TabGroup: Story = {
  render: () => ({
    components: { BsTabButton },
    template: `
      <div style="display: flex; gap: 12px; padding: 40px; background: #1A1A2E;">
        <BsTabButton label="BRAWLERS" :active="true" />
        <BsTabButton label="MODES" :active="false" />
        <BsTabButton label="EVENTS" :active="false" />
        <BsTabButton label="SETTINGS" :active="false" :disabled="true" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
