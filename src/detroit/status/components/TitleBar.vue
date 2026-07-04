<template>
  <div class="cy-titlebar">
    <span class="cy-brand">CYBERLIFE · 软体状态监测</span>
    <span class="cy-model">{{ store.data.主角.名称 }} / {{ store.data.主角.出身 }}</span>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.cy-titlebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--c-text-dim);
  border-bottom: 1px solid var(--c-border);
  padding-bottom: 10px;
}
.cy-brand {
  color: var(--c-blue-deep);
  font-weight: bold;
  letter-spacing: 3px;
}
.cy-model {
  color: var(--c-text-mute);
}
</style>
