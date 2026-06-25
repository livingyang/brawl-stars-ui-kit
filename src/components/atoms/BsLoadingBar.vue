<template>
  <div class="bs-loading-bar" :class="{ loading }" :style="containerStyle">
    <div class="track">
      <div class="fill" />
      <div class="shine" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BsColors, BsAnimation } from './BsTokens';

export interface BsLoadingBarProps {
  loading?: boolean;
}

const props = withDefaults(defineProps<BsLoadingBarProps>(), {
  loading: true,
});

const containerStyle = computed(() => ({
  '--bs-yellow': BsColors.yellow,
  '--bs-yellow-dark': BsColors.yellowDark,
  '--bs-black': BsColors.black,
  '--bs-animation-slow': BsAnimation.slow,
}));
</script>

<style scoped>
.bs-loading-bar {
  width: 100%;
  height: 16px;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.bs-loading-bar .track {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bs-loading-bar .fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, var(--bs-yellow) 0%, var(--bs-yellow-dark) 100%);
}

.bs-loading-bar.loading .fill {
  animation: loading-slide 1.5s ease-in-out infinite;
}

@keyframes loading-slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(350%);
  }
}

.bs-loading-bar .shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
}
</style>
