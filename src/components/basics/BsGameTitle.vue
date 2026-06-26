<template>
  <div class="bs-game-title" :class="variant" :style="titleStyle">
    <div class="title-container">
      <span class="text">{{ text }}</span>
    </div>
    <div class="underline" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont } from './BsTokens';

export type BsGameTitleVariant = 'victory' | 'defeat' | 'neutral';

export interface BsGameTitleProps {
  text: string;
  variant?: BsGameTitleVariant;
}

const props = withDefaults(defineProps<BsGameTitleProps>(), {
  variant: 'neutral',
});

const titleStyle = computed(() => {
  const colors: Record<BsGameTitleVariant, { bg: string; text: string }> = {
    victory: { bg: BsColors.victoryBlue, text: BsColors.white },
    defeat: { bg: BsColors.defeatRed, text: BsColors.white },
    neutral: { bg: BsColors.yellow, text: BsColors.black },
  };
  const c = colors[props.variant];
  return {
    '--bs-title-bg': c.bg,
    '--bs-title-text': c.text,
    '--bs-black': BsColors.black,
    '--bs-border-width': BsBorder.width,
    '--bs-font-size': BsFont.sizes.title,
    '--bs-font-weight': String(BsFont.weights.bold),
  };
});
</script>

<style scoped>
.bs-game-title {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 60px;
}

.bs-game-title .title-container {
  background: var(--bs-title-bg);
  border: var(--bs-border-width) solid #000;
  border-radius: 16px;
  box-shadow: inset 0 -6px 0 color-mix(in srgb, var(--bs-title-bg) 70%, black),
    0 6px 0 rgba(0, 0, 0, 0.3);
  padding: 16px 48px;
}

.bs-game-title .text {
  display: block;
  font-size: var(--bs-font-size);
  font-weight: var(--bs-font-weight);
  color: var(--bs-title-text);
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
}

.bs-game-title .underline {
  width: 60%;
  height: 6px;
  background: var(--bs-title-bg);
  border: var(--bs-border-width) solid #000;
  border-top: none;
  border-radius: 0 0 8px 8px;
  margin-top: -3px;
}
</style>
