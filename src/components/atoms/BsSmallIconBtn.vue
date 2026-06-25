<template>
  <button
    class="bs-small-icon-btn"
    :class="[variant, { active }]"
    :style="buttonStyle"
  >
    <span class="icon">{{ icon || iconMap[variant] }}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsAnimation, BsTransform } from './BsTokens';

export type BsSmallIconBtnVariant = 'settings' | 'back' | 'close' | 'info';

export interface BsSmallIconBtnProps {
  icon?: string;
  variant?: BsSmallIconBtnVariant;
  active?: boolean;
}

const props = withDefaults(defineProps<BsSmallIconBtnProps>(), {
  variant: 'settings',
  active: false,
});

const iconMap: Record<BsSmallIconBtnVariant, string> = {
  settings: '⚙️',
  back: '←',
  close: '✕',
  info: 'ℹ️',
};

const buttonStyle = computed(() => {
  const style: Record<string, string> = {
    '--bs-yellow': BsColors.yellow,
    '--bs-white': BsColors.white,
    '--bs-black': BsColors.black,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.round,
    '--bs-animation-fast': BsAnimation.fast,
    '--bs-transform-hover': BsTransform.hover,
    '--bs-transform-active': BsTransform.active,
  };
  return style;
});
</script>

<style scoped>
.bs-small-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 20px;
  background: var(--bs-yellow);
  border: var(--bs-border-width) solid var(--bs-black);
  border-radius: var(--bs-border-radius);
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: all var(--bs-animation-fast) ease;
  cursor: pointer;
}

.bs-small-icon-btn:hover {
  transform: var(--bs-transform-hover);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
}

.bs-small-icon-btn:active {
  transform: var(--bs-transform-active);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
}

.bs-small-icon-btn.active {
  background: var(--bs-white);
}

.bs-small-icon-btn .icon {
  line-height: 1;
}
</style>
