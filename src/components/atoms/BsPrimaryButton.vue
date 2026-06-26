<template>
  <button
    class="bs-primary-button"
    :class="{ locked }"
    :style="buttonStyle"
    :disabled="disabled"
    :aria-label="ariaLabel"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <span v-if="locked" class="lock-icon">🔒</span>
    <span class="label">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { BsColors, BsBorder, BsFont, BsAnimation, BsTransform } from './BsTokens';

export interface BsPrimaryButtonProps {
  label: string;
  disabled?: boolean;
  locked?: boolean;
  size?: 'large' | 'medium';
  ariaLabel?: string;
}

const props = withDefaults(defineProps<BsPrimaryButtonProps>(), {
  disabled: false,
  locked: false,
  size: 'large',
});

const isHovered = ref(false);
const isActive = ref(false);

const buttonStyle = computed(() => {
  const style: Record<string, string> = {
    '--bs-yellow': BsColors.yellow,
    '--bs-yellow-dark': BsColors.yellowDark,
    '--bs-black': BsColors.black,
    '--bs-white': BsColors.white,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.md,
    '--bs-font-size': props.size === 'large' ? BsFont.sizes.xxl : BsFont.sizes.lg,
    '--bs-font-weight': String(BsFont.weights.bold),
    '--bs-animation-fast': BsAnimation.fast,
    '--bs-transform-hover': BsTransform.hover,
    '--bs-transform-active': BsTransform.active,
  };
  if (props.disabled) {
    style.opacity = '0.5';
    style.cursor = 'not-allowed';
  } else if (props.locked) {
    style.cursor = 'not-allowed';
  } else {
    style.cursor = 'pointer';
  }
  return style;
});

const ariaLabel = computed(() => props.ariaLabel || props.label);

const onMouseEnter = () => {
  if (!props.disabled && !props.locked) isHovered.value = true;
};
const onMouseLeave = () => {
  isHovered.value = false;
  isActive.value = false;
};
const onMouseDown = () => {
  if (!props.disabled && !props.locked) isActive.value = true;
};
const onMouseUp = () => {
  isActive.value = false;
};
</script>

<style scoped>
.bs-primary-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 200px;
  height: 84px;
  padding: 0 48px;
  font-size: var(--bs-font-size);
  font-weight: var(--bs-font-weight);
  color: var(--bs-black);
  background: linear-gradient(180deg, var(--bs-yellow) 0%, var(--bs-yellow-dark) 100%);
  border: var(--bs-border-width) solid var(--bs-black);
  border-radius: var(--bs-border-radius);
  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 4px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: all var(--bs-animation-fast) ease;
  overflow: hidden;
  font-family: inherit;
}

.bs-primary-button:hover:not(:disabled):not(.locked) {
  transform: var(--bs-transform-hover) translateY(-2px);
  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 6px 8px rgba(0, 0, 0, 0.3);
}

.bs-primary-button:active:not(:disabled):not(.locked) {
  transform: var(--bs-transform-active) translateY(2px);
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.3);
}

.bs-primary-button.locked {
  background: linear-gradient(180deg, #888 0%, #666 100%);
}

.bs-primary-button .lock-icon {
  font-size: 20px;
}

.bs-primary-button .label {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
}
</style>
