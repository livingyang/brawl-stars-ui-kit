<template>
  <div class="bs-rank-tag" :class="variant" :style="tagStyle">
    <span class="hash">#</span>
    <span class="rank">{{ rank }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont } from './BsTokens';

export type BsRankTagVariant = 'victory' | 'defeat';

export interface BsRankTagProps {
  rank: number | string;
  variant?: BsRankTagVariant;
}

const props = withDefaults(defineProps<BsRankTagProps>(), {
  variant: 'victory',
});

const tagStyle = computed(() => {
  const colors: Record<BsRankTagVariant, { bg: string; text: string }> = {
    victory: { bg: BsColors.victoryBlue, text: BsColors.white },
    defeat: { bg: BsColors.defeatRed, text: BsColors.white },
  };
  const c = colors[props.variant];
  return {
    '--bs-rank-bg': c.bg,
    '--bs-rank-text': c.text,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.md,
    '--bs-font-size': BsFont.sizes.xl,
    '--bs-font-weight': String(BsFont.weights.bold),
  };
});
</script>

<style scoped>
.bs-rank-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 180px;
  height: 52px;
  padding: 0 24px;
  font-size: var(--bs-font-size);
  font-weight: var(--bs-font-weight);
  color: var(--bs-rank-text);
  background: var(--bs-rank-bg);
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.2), 0 3px 0 rgba(0, 0, 0, 0.3);
}

.bs-rank-tag.defeat {
  box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.3), 0 3px 0 rgba(0, 0, 0, 0.4);
}

.bs-rank-tag .hash {
  opacity: 0.7;
}
</style>
