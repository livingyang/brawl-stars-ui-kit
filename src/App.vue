<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import BrawlersPage from './pages/BrawlersPage.vue';

type PageName = 'home' | 'brawlers';

const currentPage = ref<PageName>('home');

const navigateTo = (page: PageName) => {
  currentPage.value = page;
};
</script>

<template>
  <HelloWorld v-if="currentPage === 'home'" @navigate="navigateTo" />
  <BrawlersPage v-else @back="navigateTo('home')" />
</template>