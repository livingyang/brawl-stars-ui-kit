import type { Meta, StoryObj } from '@storybook/vue3';
import BsLoadingBar from './BsLoadingBar.vue';

const meta: Meta<typeof BsLoadingBar> = {
  title: 'Basics/BsLoadingBar',
  component: BsLoadingBar,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean', description: 'Loading animation state' },
  },
  parameters: {
    layout: 'fullscreen',
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
type Story = StoryObj<typeof BsLoadingBar>;

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Stopped: Story = {
  args: {
    loading: false,
  },
};

export const FullScreen: Story = {
  render: () => ({
    components: { BsLoadingBar },
    template: `
      <div style="position: fixed; bottom: 0; left: 0; right: 0; padding: 0;">
        <BsLoadingBar :loading="true" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
