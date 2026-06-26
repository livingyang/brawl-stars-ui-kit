import type { Meta, StoryObj } from '@storybook/vue3';
import BsModeIcon from './BsModeIcon.vue';

const meta: Meta<typeof BsModeIcon> = {
  title: 'Basics/BsModeIcon',
  component: BsModeIcon,
  tags: ['autodocs'],
  argTypes: {
    modeType: {
      control: 'select',
      options: ['solo', 'duo', 'team', 'ranked', 'club', 'challenge', 'special'],
      description: 'Game mode type',
    },
    label: { control: 'text', description: 'Custom label' },
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
type Story = StoryObj<typeof BsModeIcon>;

export const Solo: Story = {
  args: {
    modeType: 'solo',
  },
};

export const Duo: Story = {
  args: {
    modeType: 'duo',
  },
};

export const Team: Story = {
  args: {
    modeType: 'team',
  },
};

export const Ranked: Story = {
  args: {
    modeType: 'ranked',
  },
};

export const Club: Story = {
  args: {
    modeType: 'club',
  },
};

export const Challenge: Story = {
  args: {
    modeType: 'challenge',
  },
};

export const Special: Story = {
  args: {
    modeType: 'special',
  },
};

export const AllModes: Story = {
  render: () => ({
    components: { BsModeIcon },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 24px; padding: 40px; background: #1A1A2E; justify-content: center;">
        <BsModeIcon modeType="solo" />
        <BsModeIcon modeType="duo" />
        <BsModeIcon modeType="team" />
        <BsModeIcon modeType="ranked" />
        <BsModeIcon modeType="club" />
        <BsModeIcon modeType="challenge" />
        <BsModeIcon modeType="special" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
