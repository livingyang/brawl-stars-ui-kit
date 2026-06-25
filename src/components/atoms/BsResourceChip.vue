<template>
  <div class="bs-resource-chip" :style="chipStyle">
    <span class="icon">{{ icon }}</span>
    <span class="value">
      {{ value }}
      <span v-if="maxValue !== null" class="max">/{{ maxValue }}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont } from './BsTokens';

export type BsResourceChipVariant = 'coins' | 'gems' | 'powerpoints' | 'starrrops';

export interface BsResourceChipProps {
  icon: string;
  value: number | string;
  maxValue?: number | string | null;
  variant?: BsResourceChipVariant;
}

const props = withDefaults(defineProps<BsResourceChipProps>(), {
  maxValue: null,
  variant: 'coins',
});

const chipStyle = computed(() => {
  const variantColors: Record<BsResourceChipVariant, { bg: string; text: string }> = {
    coins: { bg: '#FFD700', text: '#000' },
    gems: { bg: '#B9F2FF', text: '#000' },
    powerpoints: { bg: '#9C27B0', text: '#FFF' },
    starrrops: { bg: '#FF6B6B', text: '#FFF' },
  };
  const c = variantColors[props.variant];
  return {
    '--bs-chip-bg': c.bg,
    '--bs-chip-text': c.text,
    '--bs-black': BsColors.black,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.md,
    '--bs-font-size': BsFont.sizes.lg,
    '--bs-font-weight': String(BsFont.weights.bold),
  };
});
</script>

<style scoped>
.bs-resource-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  min-width: 120px;
  padding: 0 16px;
  font-size: var(--bs-font-size);
  font-weight: var(--bs-font-weight);
  color: var(--bs-chip-text);
  background: var(--bs-chip-bg);
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
}

.bs-resource-chip .icon {
  font-size: 18px;
}

.bs-resource-chip .max {
  opacity: 0.7;
  font-size: 0.85em;
}
</style>
