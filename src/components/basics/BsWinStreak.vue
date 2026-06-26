<template>
  <div class="bs-win-streak" :class="{ active: hasStreak }" :style="containerStyle">
    <span class="flame">{{ hasStreak ? '🔥' : '💨' }}</span>
    <div class="text-container">
      <span class="label">WIN</span>
      <span class="label">STREAK</span>
    </div>
    <span class="number">{{ streakNum }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont, BsAnimation } from './BsTokens';

export interface BsWinStreakProps {
  streakNum: number;
}

const props = defineProps<BsWinStreakProps>();

const hasStreak = computed(() => props.streakNum > 0);

const containerStyle = computed(() => ({
  '--bs-yellow': BsColors.yellow,
  '--bs-yellow-dark': BsColors.yellowDark,
  '--bs-black': BsColors.black,
  '--bs-white': BsColors.white,
  '--bs-border-width': BsBorder.width,
  '--bs-border-radius': BsBorder.radius.md,
  '--bs-font-size-sm': BsFont.sizes.sm,
  '--bs-font-size-lg': BsFont.sizes.xl,
  '--bs-font-weight': String(BsFont.weights.bold),
  '--bs-animation': BsAnimation.slow,
}));
</script>

<style scoped>
.bs-win-streak {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 12px;
  background: linear-gradient(180deg, #888 0%, #666 100%);
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 3px 0 rgba(0, 0, 0, 0.3);
}

.bs-win-streak.active {
  background: linear-gradient(180deg, var(--bs-yellow) 0%, var(--bs-yellow-dark) 100%);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.1);
  }
}

.bs-win-streak .flame {
  font-size: 18px;
}

.bs-win-streak .text-container {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.bs-win-streak .label {
  font-size: 8px;
  font-weight: var(--bs-font-weight);
  color: #000;
  letter-spacing: 0.5px;
}

.bs-win-streak .number {
  font-size: var(--bs-font-size-lg);
  font-weight: var(--bs-font-weight);
  color: #000;
  margin-left: 4px;
}
</style>
