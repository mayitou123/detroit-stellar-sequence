<template>
  <div class="cy-root">
    <canvas ref="bgCanvas" class="cy-bg"></canvas>
    <div class="cy-inner">
      <TitleBar />
      <RingRow />
      <InfoBar />
      <TabBar v-model="activeTab" :tabs="tabs" />
      <div class="cy-tab-content">
        <OriginTab v-show="activeTab === 'origin'" />
        <NewsTab v-show="activeTab === 'news'" />
        <InventoryTab v-show="activeTab === 'inventory'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InventoryTab from './components/InventoryTab.vue';
import InfoBar from './components/InfoBar.vue';
import NewsTab from './components/NewsTab.vue';
import OriginTab from './components/OriginTab.vue';
import RingRow from './components/RingRow.vue';
import TabBar from './components/TabBar.vue';
import TitleBar from './components/TitleBar.vue';
import { useBreathingBg } from './useBreathingBg';

const bgCanvas = ref<HTMLCanvasElement | null>(null);
useBreathingBg(bgCanvas);

const tabs = [
  { id: 'origin', label: '起源角色' },
  { id: 'news', label: '实时快讯' },
  { id: 'inventory', label: '物品栏' },
];
const activeTab = useLocalStorage<string>('detroit:status:tab', 'origin');
</script>

<style lang="scss" scoped>
.cy-root {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  border: 1px solid var(--c-border);
  border-radius: 6px;
  overflow: hidden;
  background: var(--c-bg-deep);
  font-family: var(--font-mono);
  color: var(--c-text);
}
.cy-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.cy-inner {
  position: relative;
  z-index: 2;
  padding: 22px 22px 18px;
}
.cy-tab-content {
  margin-top: 12px;
  min-height: 80px;
}
</style>
