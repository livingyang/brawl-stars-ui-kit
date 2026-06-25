<template>
  <div class="bs-brawler-avatar" :class="{ locked, new: isNew }" :style="avatarStyle">
    <div class="avatar-ring">
      <div class="avatar-inner">
        <img v-if="avatarUrl" :src="avatarUrl" :alt="name" class="avatar-img" />
        <span v-else class="avatar-placeholder">{{ name.charAt(0) || 'B' }}</span>
      </div>
      <div v-if="locked" class="lock-overlay">🔒</div>
      <div v-if="isNew" class="new-badge">NEW</div>
    </div>
    <div v-if="starLevel > 0" class="star-level">{{ '⭐'.repeat(starLevel) }}</div>
    <div v-if="trophyCount > 0" class="trophy-count">🏆 {{ trophyCount }}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsBorder, BsFont } from './BsTokens';

export interface BsBrawlerAvatarProps {
  name?: string;
  avatarUrl?: string;
  locked?: boolean;
  isNew?: boolean;
  starLevel?: number;
  trophyCount?: number;
}

const props = withDefaults(defineProps<BsBrawlerAvatarProps>(), {
  name: 'Brawler',
  locked: false,
  isNew: false,
  starLevel: 0,
  trophyCount: 0,
});

const avatarStyle = computed(() => ({
  '--bs-yellow': BsColors.yellow,
  '--bs-black': BsColors.black,
  '--bs-white': BsColors.white,
  '--bs-border-width': BsBorder.width,
  '--bs-border-radius': BsBorder.radius.round,
  '--bs-font-weight': String(BsFont.weights.bold),
}));
</script>

<style scoped>
.bs-brawler-avatar {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.bs-brawler-avatar .avatar-ring {
  position: relative;
  width: 144px;
  height: 144px;
  background: linear-gradient(180deg, var(--bs-yellow) 0%, #d4ab20 100%);
  border: var(--bs-border-width) solid #000;
  border-radius: var(--bs-border-radius);
  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 6px;
  box-sizing: border-box;
}

.bs-brawler-avatar.locked .avatar-ring {
  filter: grayscale(80%);
}

.bs-brawler-avatar .avatar-inner {
  width: 100%;
  height: 100%;
  background: var(--bs-white);
  border-radius: var(--bs-border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bs-brawler-avatar .avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bs-brawler-avatar .avatar-placeholder {
  font-size: 48px;
  font-weight: var(--bs-font-weight);
  color: #000;
}

.bs-brawler-avatar .lock-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.bs-brawler-avatar .new-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--bs-yellow);
  color: #000;
  font-size: 10px;
  font-weight: var(--bs-font-weight);
  padding: 2px 6px;
  border: 2px solid #000;
  border-radius: 4px;
}

.bs-brawler-avatar .star-level {
  font-size: 16px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.bs-brawler-avatar .trophy-count {
  font-size: 12px;
  font-weight: var(--bs-font-weight);
  color: #000;
  background: var(--bs-white);
  padding: 2px 8px;
  border: 2px solid #000;
  border-radius: 4px;
}
</style>
