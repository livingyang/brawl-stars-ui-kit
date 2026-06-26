<template>
  <div class="bs-currency-icon" :style="iconStyle">
    <span class="icon">{{ currencyConfig[currencyType].icon }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder } from './BsTokens';

export type CurrencyType = 'coins' | 'gems' | 'powerpoints' | 'trophies' | 'starrrops';

export interface BsCurrencyIconProps {
  currencyType: CurrencyType;
  size?: 'small' | 'medium' | 'large';
}

const props = withDefaults(defineProps<BsCurrencyIconProps>(), {
  size: 'medium',
});

const sizeMap = {
  small: { container: 32, icon: 18 },
  medium: { container: 40, icon: 24 },
  large: { container: 56, icon: 32 },
};

const currencyConfig: Record<CurrencyType, { icon: string; bg: string; border: string }> = {
  coins: { icon: '🪙', bg: '#FFD700', border: '#DAA520' },
  gems: { icon: '💎', bg: '#B9F2FF', border: '#7FDBFF' },
  powerpoints: { icon: '⚡', bg: '#9C27B0', border: '#7B1FA2' },
  trophies: { icon: '🏆', bg: '#FFE0B2', border: '#FFB74D' },
  starrrops: { icon: '🌟', bg: '#FF6B6B', border: '#F44336' },
};

const iconStyle = computed(() => {
  const size = sizeMap[props.size];
  const config = currencyConfig[props.currencyType];
  return {
    '--bs-size': `${size.container}px`,
    '--bs-icon-size': `${size.icon}px`,
    '--bs-bg': config.bg,
    '--bs-border-color': config.border,
    '--bs-black': BsColors.black,
    '--bs-border-width': BsBorder.width,
  };
});
</script>

<style scoped>
.bs-currency-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--bs-size);
  height: var(--bs-size);
  background: var(--bs-bg);
  border: var(--bs-border-width) solid #000;
  border-radius: 50%;
  box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--bs-border-color) 80%, black),
    0 2px 0 rgba(0, 0, 0, 0.3);
}

.bs-currency-icon .icon {
  font-size: var(--bs-icon-size);
  line-height: 1;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
}
</style>
