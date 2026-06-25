<template>
  <div class="bs-badge" :style="badgeStyle">
    <span v-if="prefix" class="prefix">{{ prefix }}</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont } from './BsTokens';

export type BsBadgeVariant = 'positive' | 'negative' | 'neutral';

export interface BsBadgeProps {
  value: number | string;
  variant?: BsBadgeVariant;
  prefix?: string;
}

const props = withDefaults(defineProps<BsBadgeProps>(), {
  variant: 'neutral',
});

const badgeStyle = computed(() => {
  const colors: Record<BsBadgeVariant, { bg: string; text: string }> = {
    positive: { bg: BsColors.green, text: BsColors.white },
    negative: { bg: BsColors.defeatRed, text: BsColors.white },
    neutral: { bg: BsColors.gray600, text: BsColors.white },
  };
  const c = colors[props.variant];
  return {
    '--bs-badge-bg': c.bg,
    '--bs-badge-text': c.text,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.sm,
    '--bs-font-size': BsFont.sizes.md,
    '--bs-font-weight': String(BsFont.weights.bold),
  };
});
</script>

<style scoped>
.bs-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  min-width: 48px;
  padding: 0 12px;
  font-size: var(--bs-font-size);
  font-weight: var(--bs-font-weight);
  color: var(--bs-badge-text);
  background: var(--bs-badge-bg);
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
}

.bs-badge .prefix {
  margin-right: 4px;
  opacity: 0.8;
}
</style>
