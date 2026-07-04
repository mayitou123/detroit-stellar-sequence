<template>
  <div class="cy-info">
    <span><b>区域</b> {{ store.data.环境.当前区域 }}</span>
    <span><b>舆论</b> {{ store.data.环境.舆论阶段 }}</span>
    <span><b>时间</b> {{ store.data.环境.时间段 }}</span>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.cy-info {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--c-text-mute);
  padding: 8px 0 4px;
  border-bottom: 1px solid var(--c-border);
  flex-wrap: wrap;
}
.cy-info b {
  color: var(--c-blue-deep);
  font-weight: normal;
  margin-right: 4px;
}
</style>
