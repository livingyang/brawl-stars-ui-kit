<template>
  <div class="brawlers-page" :style="pageStyle">
    <div class="skull-bg">
      <div v-for="i in 20" :key="i" class="skull-icon">💀</div>
    </div>

    <header class="page-header">
      <BsSmallIconBtn variant="back" @click="$emit('back')" />

      <div class="header-title">
        <h1 class="title-text">BRAWLERS {{ unlockedCount }}/{{ totalCount }}</h1>
      </div>

      <div class="header-actions">
        <div class="power-level-tag">
          <span>Power Level</span>
        </div>
        <div class="toggle-btn">
          <span class="toggle-icon">⬛</span>
        </div>
        <BsSmallIconBtn icon="🏠" variant="settings" aria-label="Home" />
      </div>
    </header>

    <div class="brawlers-grid">
      <BrawlerCard
        v-for="brawler in brawlers"
        :key="brawler.name"
        :name="brawler.name"
        :avatar-url="brawler.avatarUrl"
        :level="brawler.level"
        :trophy-count="brawler.trophyCount"
        :coin-cost="brawler.coinCost"
        :power-points="brawler.powerPoints"
        :upgrade-coins="brawler.upgradeCoins"
        :is-new="brawler.isNew"
        :is-max-power="brawler.isMaxPower"
        :rarity="brawler.rarity"
        :bg-color="brawler.bgColor"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont } from '../components/atoms/BsTokens';
import { BsSmallIconBtn } from '../components/atoms';
import BrawlerCard from '../components/molecules/BrawlerCard.vue';
import type { RarityType } from '../components/molecules/BrawlerCard.vue';

interface BrawlerData {
  name: string;
  avatarUrl?: string;
  level: number;
  trophyCount: number;
  coinCost: number;
  powerPoints: number;
  upgradeCoins: number;
  isNew?: boolean;
  isMaxPower?: boolean;
  rarity: RarityType;
  bgColor: string;
}

defineEmits<{
  (e: 'back'): void;
}>();

const unlockedCount = 21;
const totalCount = 82;

const brawlers: BrawlerData[] = [
  {
    name: 'JACKY',
    level: 12,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 0,
    upgradeCoins: 0,
    isNew: true,
    isMaxPower: true,
    rarity: 'rare',
    bgColor: '#4FC3F7',
  },
  {
    name: 'JESSIE',
    level: 10,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 550,
    upgradeCoins: 1250,
    isNew: false,
    isMaxPower: false,
    rarity: 'rare',
    bgColor: '#FF7043',
  },
  {
    name: 'NITA',
    level: 10,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 550,
    upgradeCoins: 1250,
    isNew: false,
    isMaxPower: false,
    rarity: 'rare',
    bgColor: '#EF5350',
  },
  {
    name: 'EMZ',
    level: 5,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 550,
    upgradeCoins: 1250,
    isNew: false,
    isMaxPower: false,
    rarity: 'epic',
    bgColor: '#AB47BC',
  },
  {
    name: 'SHELLY',
    level: 5,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 340,
    upgradeCoins: 800,
    isNew: false,
    isMaxPower: false,
    rarity: 'trophyRoad',
    bgColor: '#4FC3F7',
  },
  {
    name: 'FRANK',
    level: 5,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 340,
    upgradeCoins: 800,
    isNew: false,
    isMaxPower: false,
    rarity: 'rare',
    bgColor: '#BA68C8',
  },
];

const pageStyle = computed(() => ({
  '--bs-border-width': BsBorder.width,
  '--bs-font-weight': String(BsFont.weights.bold),
  '--bs-yellow': BsColors.yellow,
  '--bs-yellow-dark': BsColors.yellowDark,
  '--bs-black': BsColors.black,
  '--bs-white': BsColors.white,
}));
</script>

<style scoped>
.brawlers-page {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(180deg, #1565c0 0%, #0d47a1 100%);
  padding: 16px 24px 32px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.skull-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.skull-icon {
  position: absolute;
  font-size: 80px;
  opacity: 0.06;
  color: #fff;
}

.skull-icon:nth-child(1) { top: 10%; left: 5%; }
.skull-icon:nth-child(2) { top: 25%; left: 15%; }
.skull-icon:nth-child(3) { top: 40%; left: 3%; }
.skull-icon:nth-child(4) { top: 60%; left: 10%; }
.skull-icon:nth-child(5) { top: 80%; left: 6%; }
.skull-icon:nth-child(6) { top: 15%; right: 8%; }
.skull-icon:nth-child(7) { top: 35%; right: 12%; }
.skull-icon:nth-child(8) { top: 55%; right: 5%; }
.skull-icon:nth-child(9) { top: 75%; right: 10%; }
.skull-icon:nth-child(10) { top: 90%; left: 20%; }
.skull-icon:nth-child(11) { top: 5%; left: 40%; }
.skull-icon:nth-child(12) { top: 20%; left: 60%; }
.skull-icon:nth-child(13) { top: 45%; left: 75%; }
.skull-icon:nth-child(14) { top: 65%; left: 50%; }
.skull-icon:nth-child(15) { top: 85%; left: 70%; }
.skull-icon:nth-child(16) { top: 30%; left: 30%; }
.skull-icon:nth-child(17) { top: 50%; left: 85%; }
.skull-icon:nth-child(18) { top: 70%; left: 30%; }
.skull-icon:nth-child(19) { top: 95%; left: 45%; }
.skull-icon:nth-child(20) { top: 8%; right: 30%; }

.page-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.header-title {
  flex: 1;
  display: flex;
  justify-content: center;
}

.title-text {
  font-size: 28px;
  font-weight: var(--bs-font-weight);
  color: #fff;
  text-shadow:
    0 3px 0 #000,
    0 -1px 0 #000,
    1px 0 0 #000,
    -1px 0 0 #000,
    0 4px 8px rgba(0, 0, 0, 0.4);
  margin: 0;
  letter-spacing: 1px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.power-level-tag {
  background: linear-gradient(180deg, var(--bs-yellow) 0%, var(--bs-yellow-dark) 100%);
  border: var(--bs-border-width) solid #000;
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: var(--bs-font-weight);
  color: #000;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
}

.toggle-btn {
  width: 48px;
  height: 32px;
  background: linear-gradient(180deg, #fff 0%, #e0e0e0 100%);
  border: var(--bs-border-width) solid #000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.toggle-icon {
  font-size: 16px;
}

.brawlers-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
}
</style>
