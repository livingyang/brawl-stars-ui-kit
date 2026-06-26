import type { Meta, StoryObj } from '@storybook/vue3';
import BsCurrencyIcon from './BsCurrencyIcon.vue';

const meta: Meta<typeof BsCurrencyIcon> = {
  title: 'Basics/BsCurrencyIcon',
  component: BsCurrencyIcon,
  tags: ['autodocs'],
  argTypes: {
    currencyType: {
      control: 'select',
      options: ['coins', 'gems', 'powerpoints', 'trophies', 'starrrops'],
      description: 'Currency type',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Icon size',
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
type Story = StoryObj<typeof BsCurrencyIcon>;

export const Coins: Story = {
  args: {
    currencyType: 'coins',
    size: 'medium',
  },
};

export const Gems: Story = {
  args: {
    currencyType: 'gems',
    size: 'medium',
  },
};

export const PowerPoints: Story = {
  args: {
    currencyType: 'powerpoints',
    size: 'medium',
  },
};

export const Trophies: Story = {
  args: {
    currencyType: 'trophies',
    size: 'medium',
  },
};

export const Starrrops: Story = {
  args: {
    currencyType: 'starrrops',
    size: 'medium',
  },
};

export const AllSizes: Story = {
  render: () => ({
    components: { BsCurrencyIcon },
    template: `
      <div style="display: flex; gap: 32px; padding: 40px; background: #1A1A2E; align-items: flex-end;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <BsCurrencyIcon currencyType="coins" size="small" />
          <span style="color: white; font-size: 12px;">Small</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <BsCurrencyIcon currencyType="gems" size="medium" />
          <span style="color: white; font-size: 12px;">Medium</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <BsCurrencyIcon currencyType="trophies" size="large" />
          <span style="color: white; font-size: 12px;">Large</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AllTypes: Story = {
  render: () => ({
    components: { BsCurrencyIcon },
    template: `
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsCurrencyIcon currencyType="coins" />
        <BsCurrencyIcon currencyType="gems" />
        <BsCurrencyIcon currencyType="powerpoints" />
        <BsCurrencyIcon currencyType="trophies" />
        <BsCurrencyIcon currencyType="starrrops" />
      </div>
    `,
  }),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
