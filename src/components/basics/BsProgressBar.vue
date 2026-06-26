<template>
  <div class="bs-progress-bar" :style="barStyle">
    <div class="track">
      <div class="fill" :style="{ width: `${percentage}%` }">
        <div class="shine" />
      </div>
    </div>
    <span v-if="showText" class="text">{{ current }}/{{ max }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont } from './BsTokens';

export type BsProgressBarColor = 'yellow' | 'blue' | 'red' | 'green';

export interface BsProgressBarProps {
  current: number;
  max: number;
  color?: BsProgressBarColor;
  showText?: boolean;
}

const props = withDefaults(defineProps<BsProgressBarProps>(), {
  color: 'yellow',
  showText: true,
});

const percentage = computed(() => Math.min(100, Math.max(0, (props.current / props.max) * 100)));

const colorMap: Record<BsProgressBarColor, { fill: string; shadow: string }> = {
  yellow: { fill: BsColors.yellow, shadow: BsColors.yellowDark },
  blue: { fill: BsColors.victoryBlue, shadow: BsColors.victoryBlueDark },
  red: { fill: BsColors.defeatRed, shadow: BsColors.defeatRedDark },
  green: { fill: BsColors.green, shadow: '#388E3C' },
};

const barStyle = computed(() => {
  const c = colorMap[props.color];
  return {
    '--bs-fill': c.fill,
    '--bs-shadow': c.shadow,
    '--bs-black': BsColors.black,
    '--bs-white': BsColors.white,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.sm,
    '--bs-font-size': BsFont.sizes.md,
    '--bs-font-weight': String(BsFont.weights.bold),
  };
});
</script>

<style scoped>
.bs-progress-bar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}

.bs-progress-bar .track {
  flex: 1;
  height: 28px;
  background: var(--bs-white);
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.bs-progress-bar .fill {
  height: 100%;
  background: linear-gradient(180deg, var(--bs-fill) 0%, var(--bs-shadow) 100%);
  border-radius: calc(var(--bs-border-radius) - 2px);
  transition: width 0.3s ease;
  position: relative;
}

.bs-progress-bar .fill .shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%);
}

.bs-progress-bar .text {
  font-size: var(--bs-font-size);
  font-weight: var(--bs-font-weight);
  color: #000;
  min-width: 60px;
  text-align: right;
}
</style>
