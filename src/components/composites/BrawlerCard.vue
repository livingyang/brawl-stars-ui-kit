<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont, BsAnimation, BsTransform } from '../basics/BsTokens';

export type RarityType = 'trophyRoad' | 'rare' | 'superRare' | 'epic' | 'mythic' | 'legendary';

export interface BrawlerCardProps {
  name: string;
  avatarUrl?: string;
  level: number;
  trophyCount: number;
  coinCost: number;
  powerPoints: number;
  upgradeCoins: number;
  isNew?: boolean;
  isMaxPower?: boolean;
  rarity?: RarityType;
  bgColor?: string;
}

const props = withDefaults(defineProps<BrawlerCardProps>(), {
  isNew: false,
  isMaxPower: false,
  rarity: 'rare',
  bgColor: '#4CAF50',
});

const rarityColors: Record<RarityType, string> = {
  trophyRoad: '#4CAF50',
  rare: '#2196F3',
  superRare: '#9C27B0',
  epic: '#FF9800',
  mythic: '#E91E63',
  legendary: '#FFD700',
};

const rarityColor = computed(() => rarityColors[props.rarity]);

const cardStyle = computed(() => ({
  '--bs-border-width': BsBorder.width,
  '--bs-border-radius': BsBorder.radius.md,
  '--bs-font-weight': String(BsFont.weights.bold),
  '--bs-animation-fast': BsAnimation.fast,
  '--bs-transform-hover': BsTransform.hover,
  '--bs-transform-active': BsTransform.active,
  '--bs-yellow': BsColors.yellow,
  '--bs-black': BsColors.black,
  '--bs-white': BsColors.white,
}));
</script>

<template>
  <div class="brawler-card" :class="{ 'max-power': isMaxPower }" :style="cardStyle">
    <div class="card-top">
      <div class="trophy-badge">
        <span class="trophy-icon">🏆</span>
        <span class="trophy-value">{{ trophyCount }}</span>
      </div>
      <div class="coin-badge">
        <span class="coin-icon">🪙</span>
        <span class="coin-value">{{ coinCost }}</span>
      </div>
    </div>

    <div class="avatar-section" :style="{ background: bgColor }">
      <div v-if="isNew" class="new-tag">NEW</div>
      <div class="rarity-tag" :style="{ background: rarityColor }">
        <span class="rarity-diamond">◆</span>
      </div>
      <div class="brawler-avatar">
        <img v-if="avatarUrl" :src="avatarUrl" :alt="name" class="avatar-img" />
        <span v-else class="avatar-placeholder">{{ name.charAt(0) }}</span>
      </div>
    </div>

    <div class="card-bottom">
      <div class="level-badge">
        <span class="level-text">{{ level }}</span>
      </div>
      <span class="brawler-name">{{ name }}</span>
    </div>

    <div class="upgrade-section">
      <div class="upgrade-item power-points">
        <span class="upgrade-icon">⚡</span>
        <span class="upgrade-value">{{ powerPoints }}</span>
      </div>
      <div class="upgrade-item coins">
        <span class="upgrade-icon">🪙</span>
        <span class="upgrade-value">{{ upgradeCoins }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brawler-card {
  position: relative;
  width: 200px;
  background: #fff;
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all var(--bs-animation-fast) ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.brawler-card:hover {
  transform: var(--bs-transform-hover);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.brawler-card:active {
  transform: var(--bs-transform-active);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background: #fff;
}

.trophy-badge,
.coin-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 2px 8px;
  font-weight: var(--bs-font-weight);
  font-size: 14px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
}

.trophy-badge {
  background: linear-gradient(180deg, #fff3b0 0%, #ffd700 100%);
}

.trophy-icon,
.coin-icon {
  font-size: 14px;
}

.coin-badge {
  background: linear-gradient(180deg, #fff3b0 0%, #ffd700 100%);
}

.avatar-section {
  position: relative;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: var(--bs-border-width) solid #000;
  border-bottom: var(--bs-border-width) solid #000;
}

.new-tag {
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ff3d3d;
  color: #fff;
  font-size: 10px;
  font-weight: var(--bs-font-weight);
  padding: 2px 6px;
  border: 2px solid #000;
  border-radius: 4px;
  z-index: 2;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.rarity-tag {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 4px;
  z-index: 2;
}

.rarity-diamond {
  color: #fff;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.brawler-avatar {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.avatar-placeholder {
  font-size: 48px;
  font-weight: var(--bs-font-weight);
  color: #fff;
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
}

.card-bottom {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: #fff;
}

.level-badge {
  width: 28px;
  height: 28px;
  background: linear-gradient(180deg, #ff80ab 0%, #e91e63 100%);
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
}

.level-text {
  color: #fff;
  font-size: 14px;
  font-weight: var(--bs-font-weight);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.brawler-name {
  font-size: 16px;
  font-weight: var(--bs-font-weight);
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.brawler-card.max-power .level-badge {
  background: linear-gradient(180deg, #ffd700 0%, #ff8c00 100%);
}

.upgrade-section {
  display: flex;
  gap: 0;
  border-top: var(--bs-border-width) solid #000;
}

.upgrade-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 8px;
  font-weight: var(--bs-font-weight);
  font-size: 14px;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.upgrade-item.power-points {
  background: linear-gradient(180deg, #ba68c8 0%, #9c27b0 100%);
  border-right: 2px solid #000;
}

.upgrade-item.coins {
  background: linear-gradient(180deg, #ffd700 0%, #ff8c00 100%);
}

.upgrade-icon {
  font-size: 16px;
}

.brawler-card.max-power .upgrade-section {
  background: linear-gradient(180deg, var(--bs-yellow) 0%, #d4ab20 100%);
}

.brawler-card.max-power .upgrade-item {
  background: transparent;
  color: #000;
  text-shadow: none;
}

.brawler-card.max-power .upgrade-item.power-points {
  border-right: 2px solid #000;
}
</style>
