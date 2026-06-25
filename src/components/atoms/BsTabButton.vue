<template>
  <button
    class="bs-tab-button"
    :class="{ active }"
    :style="buttonStyle"
    :disabled="disabled"
  >
    <span class="label">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont, BsAnimation } from './BsTokens';

export interface BsTabButtonProps {
  label: string;
  active?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<BsTabButtonProps>(), {
  active: false,
  disabled: false,
});

const buttonStyle = computed(() => {
  const style: Record<string, string> = {
    '--bs-yellow': BsColors.yellow,
    '--bs-white': BsColors.white,
    '--bs-black': BsColors.black,
    '--bs-gray600': BsColors.gray600,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.md,
    '--bs-font-size': BsFont.sizes.md,
    '--bs-font-weight': String(BsFont.weights.bold),
    '--bs-animation-fast': BsAnimation.fast,
  };
  if (props.disabled) {
    style.opacity = '0.5';
    style.cursor = 'not-allowed';
  } else {
    style.cursor = 'pointer';
  }
  return style;
});
</script>

<style scoped>
.bs-tab-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 44px;
  padding: 0 24px;
  font-size: var(--bs-font-size);
  font-weight: var(--bs-font-weight);
  color: var(--bs-black);
  background: var(--bs-white);
  border: var(--bs-border-width) solid var(--bs-black);
  border-radius: var(--bs-border-radius);
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: all var(--bs-animation-fast) ease;
  font-family: inherit;
}

.bs-tab-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);
}

.bs-tab-button:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
}

.bs-tab-button.active {
  background: var(--bs-yellow);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.3);
}

.bs-tab-button .label {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
}
</style>
