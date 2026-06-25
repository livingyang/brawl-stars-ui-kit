<template>
  <button
    class="bs-secondary-button"
    :style="buttonStyle"
    :disabled="disabled"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <span class="label">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { BsColors, BsBorder, BsFont, BsAnimation, BsTransform } from './BsTokens';

export interface BsSecondaryButtonProps {
  label: string;
  disabled?: boolean;
  size?: 'large' | 'medium' | 'small';
}

const props = withDefaults(defineProps<BsSecondaryButtonProps>(), {
  disabled: false,
  size: 'medium',
});

const isHovered = ref(false);
const isActive = ref(false);

const sizeMap = {
  large: { height: 72, fontSize: BsFont.sizes.xl, padding: '0 40px', minWidth: 180 },
  medium: { height: 64, fontSize: BsFont.sizes.lg, padding: '0 32px', minWidth: 140 },
  small: { height: 48, fontSize: BsFont.sizes.md, padding: '0 24px', minWidth: 100 },
};

const buttonStyle = computed(() => {
  const size = sizeMap[props.size];
  const style: Record<string, string> = {
    '--bs-white': BsColors.white,
    '--bs-black': BsColors.black,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.md,
    '--bs-font-size': size.fontSize,
    '--bs-font-weight': String(BsFont.weights.bold),
    '--bs-animation-fast': BsAnimation.fast,
    '--bs-transform-hover': BsTransform.hover,
    '--bs-transform-active': BsTransform.active,
    height: `${size.height}px`,
    padding: size.padding,
    'min-width': `${size.minWidth}px`,
  };
  if (props.disabled) {
    style.opacity = '0.5';
    style.cursor = 'not-allowed';
  } else {
    style.cursor = 'pointer';
  }
  return style;
});

const onMouseEnter = () => {
  if (!props.disabled) isHovered.value = true;
};
const onMouseLeave = () => {
  isHovered.value = false;
  isActive.value = false;
};
const onMouseDown = () => {
  if (!props.disabled) isActive.value = true;
};
const onMouseUp = () => {
  isActive.value = false;
};
</script>

<style scoped>
.bs-secondary-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bs-white);
  border: var(--bs-border-width) solid var(--bs-black);
  border-radius: var(--bs-border-radius);
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: all var(--bs-animation-fast) ease;
  font-family: inherit;
}

.bs-secondary-button:hover:not(:disabled) {
  transform: var(--bs-transform-hover) translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
}

.bs-secondary-button:active:not(:disabled) {
  transform: var(--bs-transform-active) translateY(2px);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
}

.bs-secondary-button .label {
  color: var(--bs-black);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
</style>
