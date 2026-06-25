<template>
  <div class="bs-power-bar" :class="{ max: isMax }" :style="containerStyle">
    <div class="segments">
      <div
        v-for="(filled, index) in segments"
        :key="index"
        class="segment"
        :class="{ filled }"
      >
        <span class="segment-icon">{{ filled ? '⚡' : '○' }}</span>
      </div>
    </div>
    <span v-if="starLevel > 0" class="star-display">{{ '⭐'.repeat(starLevel) }}</span>
    <span v-if="isMax" class="max-badge">MAX</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont } from './BsTokens';

export interface BsPowerBarProps {
  segments: boolean[];
  isMax?: boolean;
  starLevel?: number;
}

const props = withDefaults(defineProps<BsPowerBarProps>(), {
  isMax: false,
  starLevel: 0,
});

const containerStyle = computed(() => ({
  '--bs-yellow': BsColors.yellow,
  '--bs-yellow-dark': BsColors.yellowDark,
  '--bs-gray400': BsColors.gray400,
  '--bs-black': BsColors.black,
  '--bs-border-width': BsBorder.width,
  '--bs-border-radius': BsBorder.radius.sm,
  '--bs-font-size': BsFont.sizes.lg,
  '--bs-font-weight': String(BsFont.weights.bold),
}));
</script>

<style scoped>
.bs-power-bar {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 12px;
  background: var(--bs-gray400);
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 3px 0 rgba(0, 0, 0, 0.3);
}

.bs-power-bar.max {
  background: linear-gradient(180deg, var(--bs-yellow) 0%, var(--bs-yellow-dark) 100%);
}

.bs-power-bar .segments {
  display: flex;
  gap: 4px;
}

.bs-power-bar .segment {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e0e0;
  border-radius: 4px;
}

.bs-power-bar .segment.filled {
  background: var(--bs-yellow);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
}

.bs-power-bar .segment-icon {
  font-size: 14px;
  color: #000;
}

.bs-power-bar .star-display {
  font-size: 16px;
  margin-left: 4px;
}

.bs-power-bar .max-badge {
  font-size: var(--bs-font-size);
  font-weight: var(--bs-font-weight);
  color: #000;
  background: var(--bs-yellow);
  padding: 2px 8px;
  border-radius: 4px;
  border: 2px solid #000;
  margin-left: auto;
}
</style>
