import type { Meta, StoryObj } from '@storybook/vue3';
import BrawlersPage from './BrawlersPage.vue';

const meta: Meta<typeof BrawlersPage> = {
  title: 'Pages/BrawlersPage',
  component: BrawlersPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BrawlersPage>;

export const Default: Story = {
  args: {},
};
