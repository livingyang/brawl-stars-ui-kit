<template>
  <div class="bs-divider-line" :class="{ 'with-dot': hasEndDot }" :style="lineStyle">
    <div class="line" />
    <div v-if="hasEndDot" class="end-dot" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder } from './BsTokens';

export type BsDividerLineVariant = 'yellow' | 'blue' | 'gray';

export interface BsDividerLineProps {
  width?: number;
  hasEndDot?: boolean;
  variant?: BsDividerLineVariant;
}

const props = withDefaults(defineProps<BsDividerLineProps>(), {
  width: 400,
  hasEndDot: false,
  variant: 'yellow',
});

const colorMap: Record<BsDividerLineVariant, { start: string; end: string }> = {
  yellow: { start: BsColors.yellow, end: BsColors.yellowDark },
  blue: { start: BsColors.victoryBlue, end: BsColors.victoryBlueDark },
  gray: { start: BsColors.gray400, end: BsColors.gray500 },
};

const lineStyle = computed(() => {
  const c = colorMap[props.variant];
  return {
    '--bs-start': c.start,
    '--bs-end': c.end,
    '--bs-black': BsColors.black,
    '--bs-border-width': BsBorder.width,
    '--bs-width': `${props.width}px`,
  };
});
</script>

<style scoped>
.bs-divider-line {
  display: inline-flex;
  align-items: center;
  height: 6px;
  width: var(--bs-width);
}

.bs-divider-line .line {
  flex: 1;
  height: 100%;
  background: linear-gradient(90deg, var(--bs-start) 0%, var(--bs-end) 100%);
  border: var(--bs-border-width) solid #000;
  border-radius: 3px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
}

.bs-divider-line.with-dot .end-dot {
  width: 12px;
  height: 12px;
  background: var(--bs-start);
  border: var(--bs-border-width) solid #000;
  border-radius: 50%;
  margin-left: -2px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
}
</style>
