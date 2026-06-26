<template>
  <div class="bs-tip-text" :style="tipStyle">
    <span class="icon">{{ icon }}</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont } from './BsTokens';

export interface BsTipTextProps {
  text: string;
  icon?: string;
}

const props = withDefaults(defineProps<BsTipTextProps>(), {
  icon: '💡',
});

const tipStyle = computed(() => ({
  '--bs-yellow': BsColors.yellow,
  '--bs-black': BsColors.black,
  '--bs-white': BsColors.white,
  '--bs-gray500': BsColors.gray500,
  '--bs-border-width': BsBorder.width,
  '--bs-border-radius': BsBorder.radius.sm,
  '--bs-font-size': BsFont.sizes.md,
}));
</script>

<style scoped>
.bs-tip-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  padding: 0 12px;
  font-size: var(--bs-font-size);
  color: #000;
  background: rgba(255, 255, 255, 0.9);
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
}

.bs-tip-text .icon {
  font-size: 14px;
}

.bs-tip-text .text {
  opacity: 0.8;
}
</style>
