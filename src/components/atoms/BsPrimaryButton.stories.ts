import type { Meta, StoryObj } from '@storybook/vue3';
import BsPrimaryButton from './BsPrimaryButton.vue';

const meta: Meta<typeof BsPrimaryButton> = {
  title: 'Basics/BsPrimaryButton',
  component: BsPrimaryButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Button label text' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    locked: { control: 'boolean', description: 'Locked state' },
    size: {
      control: 'select',
      options: ['large', 'medium'],
      description: 'Button size',
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
type Story = StoryObj<typeof BsPrimaryButton>;

export const Default: Story = {
  args: {
    label: 'PLAY',
    disabled: false,
    locked: false,
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'PLAY',
    disabled: true,
    locked: false,
    size: 'large',
  },
};

export const Locked: Story = {
  args: {
    label: 'UNLOCK',
    disabled: false,
    locked: true,
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    label: 'SELECT',
    disabled: false,
    locked: false,
    size: 'medium',
  },
};

export const AllStates: Story = {
  render: () => ({
    components: { BsPrimaryButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Default</h3>
          <BsPrimaryButton label="PLAY" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsPrimaryButton label="PLAY" :disabled="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Locked</h3>
          <BsPrimaryButton label="UNLOCK" :locked="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium Size</h3>
          <BsPrimaryButton label="SELECT" size="medium" />
        </div>
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
