import type { Meta, StoryObj } from '@storybook/vue3';
import BsBrawlerAvatar from './BsBrawlerAvatar.vue';

const meta: Meta<typeof BsBrawlerAvatar> = {
  title: 'Basics/BsBrawlerAvatar',
  component: BsBrawlerAvatar,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Brawler name' },
    avatarUrl: { control: 'text', description: 'Avatar image URL' },
    locked: { control: 'boolean', description: 'Locked state' },
    isNew: { control: 'boolean', description: 'New badge state' },
    starLevel: { control: 'number', description: 'Star level (0-3)' },
    trophyCount: { control: 'number', description: 'Trophy count' },
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
type Story = StoryObj<typeof BsBrawlerAvatar>;

export const Default: Story = {
  args: {
    name: 'SHELLY',
    locked: false,
    isNew: false,
    starLevel: 0,
    trophyCount: 0,
  },
};

export const Unlocked: Story = {
  args: {
    name: 'SHELLY',
    locked: false,
    isNew: false,
    starLevel: 2,
    trophyCount: 1250,
  },
};

export const Locked: Story = {
  args: {
    name: 'MORTIS',
    locked: true,
    isNew: false,
    starLevel: 0,
    trophyCount: 0,
  },
};

export const NewUnlock: Story = {
  args: {
    name: 'GALE',
    locked: false,
    isNew: true,
    starLevel: 0,
    trophyCount: 0,
  },
};

export const MaxStar: Story = {
  args: {
    name: 'SPike',
    locked: false,
    isNew: false,
    starLevel: 3,
    trophyCount: 2500,
  },
};

export const AllStates: Story = {
  render: () => ({
    components: { BsBrawlerAvatar },
    template: `
      <div style="display: flex; gap: 32px; padding: 40px; background: #1A1A2E;">
        <BsBrawlerAvatar name="SHELLY" :locked="false" :isNew="false" :starLevel="0" />
        <BsBrawlerAvatar name="COLT" :locked="false" :isNew="true" :starLevel="1" />
        <BsBrawlerAvatar name="BULL" :locked="false" :isNew="false" :starLevel="2" :trophyCount="1500" />
        <BsBrawlerAvatar name="SPIKE" :locked="false" :isNew="false" :starLevel="3" :trophyCount="2500" />
        <BsBrawlerAvatar name="MORTIS" :locked="true" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
