<template>
  <div class="cy-titlebar">
    <span class="cy-brand">CYBERLIFE · 软体状态监测</span>
    <span class="cy-model">{{ store.data.主角.名称 }} / {{ store.data.主角.出身 }} / {{ store.data.主角.型号 }}</span>
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
  letter-spacing: 1.5px;
  color: var(--c-text-dim);
  border-bottom: 1px solid var(--c-border);
  padding-bottom: 10px;
}
.cy-brand {
  color: var(--c-blue-deep);
  font-weight: bold;
  letter-spacing: 2px;
}
.cy-model {
  color: var(--c-text-mute);
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 280px;
}
@media (max-width: 520px) {
  .cy-titlebar {
    font-size: 9px;
    letter-spacing: 0;
  }
  .cy-brand {
    letter-spacing: 1px;
  }
  .cy-model {
    max-width: 160px;
  }
}
</style>
