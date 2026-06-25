import type { Meta, StoryObj } from '@storybook/vue3';
import BsSecondaryButton from './BsSecondaryButton.vue';

const meta: Meta<typeof BsSecondaryButton> = {
  title: 'Atoms/BsSecondaryButton',
  component: BsSecondaryButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Button label text' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
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
type Story = StoryObj<typeof BsSecondaryButton>;

export const Default: Story = {
  args: {
    label: 'EXIT',
    disabled: false,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'EXIT',
    disabled: true,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'TRY BRAWLER',
    disabled: false,
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'OK',
    disabled: false,
    size: 'small',
  },
};

export const AllSizes: Story = {
  render: () => ({
    components: { BsSecondaryButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Large</h3>
          <BsSecondaryButton label="TRY BRAWLER" size="large" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium (Default)</h3>
          <BsSecondaryButton label="EXIT" size="medium" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Small</h3>
          <BsSecondaryButton label="OK" size="small" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsSecondaryButton label="EXIT" :disabled="true" />
        </div>
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
