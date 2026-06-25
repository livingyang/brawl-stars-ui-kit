<template>
  <button
    class="bs-reward-button"
    :class="{ locked, glow }"
    :style="buttonStyle"
    :disabled="locked"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <span class="reward-icon">{{ locked ? '🔒' : '⭐' }}</span>
    <span class="label">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { BsColors, BsBorder, BsFont, BsAnimation, BsTransform } from './BsTokens';

export interface BsRewardButtonProps {
  label: string;
  locked?: boolean;
  glow?: boolean;
}

const props = withDefaults(defineProps<BsRewardButtonProps>(), {
  locked: false,
  glow: false,
});

const isHovered = ref(false);
const isActive = ref(false);

const buttonStyle = computed(() => {
  const style: Record<string, string> = {
    '--bs-green': BsColors.green,
    '--bs-yellow': BsColors.yellow,
    '--bs-yellow-light': BsColors.yellowLight,
    '--bs-black': BsColors.black,
    '--bs-white': BsColors.white,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.md,
    '--bs-font-size': BsFont.sizes.lg,
    '--bs-font-weight': String(BsFont.weights.bold),
    '--bs-animation-fast': BsAnimation.fast,
    '--bs-transform-hover': BsTransform.hover,
    '--bs-transform-active': BsTransform.active,
  };
  if (props.locked) {
    style.cursor = 'not-allowed';
  } else {
    style.cursor = 'pointer';
  }
  return style;
});

const onMouseEnter = () => {
  if (!props.locked) isHovered.value = true;
};
const onMouseLeave = () => {
  isHovered.value = false;
  isActive.value = false;
};
const onMouseDown = () => {
  if (!props.locked) isActive.value = true;
};
const onMouseUp = () => {
  isActive.value = false;
};
</script>

<style scoped>
.bs-reward-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 180px;
  height: 68px;
  padding: 0 32px;
  font-size: var(--bs-font-size);
  font-weight: var(--bs-font-weight);
  color: var(--bs-black);
  background: linear-gradient(180deg, var(--bs-yellow) 0%, #e5b800 100%);
  border: var(--bs-border-width) solid var(--bs-black);
  border-radius: var(--bs-border-radius);
  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 4px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: all var(--bs-animation-fast) ease;
  overflow: hidden;
  font-family: inherit;
}

.bs-reward-button.glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.bs-reward-button:hover:not(.locked) {
  transform: var(--bs-transform-hover) translateY(-2px);
  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.3);
}

.bs-reward-button:active:not(.locked) {
  transform: var(--bs-transform-active) translateY(2px);
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.3);
}

.bs-reward-button.locked {
  background: linear-gradient(180deg, #888 0%, #666 100%);
}

.bs-reward-button .reward-icon {
  font-size: 20px;
}

.bs-reward-button .label {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
}
</style>
