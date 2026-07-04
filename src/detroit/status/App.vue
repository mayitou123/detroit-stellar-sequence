<template>
  <div class="cy-root">
    <canvas ref="bgCanvas" class="cy-bg"></canvas>
    <div class="cy-inner">
      <TitleBar />
      <RingRow />
      <InfoBar />
      <TabBar v-model="activeTab" :tabs="tabs" />
      <div class="cy-tab-content">
        <EncounterTab v-show="activeTab === 'encounter'" />
        <NewsTab v-show="activeTab === 'news'" />
        <InventoryTab v-show="activeTab === 'inventory'" />
        <PlotTab v-show="activeTab === 'plot'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EncounterTab from './components/EncounterTab.vue';
import InventoryTab from './components/InventoryTab.vue';
import InfoBar from './components/InfoBar.vue';
import NewsTab from './components/NewsTab.vue';
import PlotTab from './components/PlotTab.vue';
import RingRow from './components/RingRow.vue';
import TabBar from './components/TabBar.vue';
import TitleBar from './components/TitleBar.vue';
import { useBreathingBg } from './useBreathingBg';

const bgCanvas = ref<HTMLCanvasElement | null>(null);
useBreathingBg(bgCanvas);

const tabs = [
  { id: 'encounter', label: '关系网' },
  { id: 'news', label: '推送' },
  { id: 'inventory', label: '实体库' },
  { id: 'plot', label: '日志' },
];
const activeTab = useLocalStorage<string>('detroit:status:tab', 'encounter');
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
@media (max-width: 520px) {
  .cy-inner {
    padding: 16px 10px 14px;
  }
}
</style>
