<template>
  <div class="bs-mode-icon" :style="iconStyle">
    <div class="icon-box">
      <span class="icon">{{ modeConfig[modeType].icon }}</span>
    </div>
    <span class="label">{{ displayLabel }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsAnimation } from './BsTokens';

export type GameModeType = 'solo' | 'duo' | 'team' | 'ranked' | 'club' | 'challenge' | 'special';

export interface BsModeIconProps {
  modeType: GameModeType;
  label?: string;
}

const props = defineProps<BsModeIconProps>();

const modeConfig: Record<GameModeType, { icon: string; bg: string; label: string }> = {
  solo: { icon: '🎯', bg: '#FF6B6B', label: 'SOLO' },
  duo: { icon: '👥', bg: '#4ECDC4', label: 'DUO' },
  team: { icon: '👔', bg: '#45B7D1', label: 'TEAM' },
  ranked: { icon: '🏆', bg: '#9C27B0', label: 'RANKED' },
  club: { icon: '🏠', bg: '#FF9800', label: 'CLUB' },
  challenge: { icon: '⚡', bg: '#E91E63', label: 'CHALLENGE' },
  special: { icon: '🌟', bg: '#673AB7', label: 'SPECIAL' },
};

const displayLabel = computed(() => props.label || modeConfig[props.modeType].label);

const iconStyle = computed(() => {
  const config = modeConfig[props.modeType];
  return {
    '--bs-mode-bg': config.bg,
    '--bs-black': BsColors.black,
    '--bs-white': BsColors.white,
    '--bs-border-width': BsBorder.width,
    '--bs-border-radius': BsBorder.radius.md,
    '--bs-animation-fast': BsAnimation.fast,
  };
});
</script>

<style scoped>
.bs-mode-icon {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform var(--bs-animation-fast) ease;
}

.bs-mode-icon:hover {
  transform: scale(1.05);
}

.bs-mode-icon .icon-box {
  width: 80px;
  height: 80px;
  background: linear-gradient(180deg, var(--bs-mode-bg) 0%, color-mix(in srgb, var(--bs-mode-bg) 70%, black) 100%);
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 4px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bs-mode-icon .icon {
  font-size: 36px;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
}

.bs-mode-icon .label {
  font-size: 14px;
  font-weight: 700;
  color: #000;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
</style>
