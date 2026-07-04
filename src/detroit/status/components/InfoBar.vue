<template>
  <div class="cy-info">
    <span class="cy-info-cell"><b>区域</b><i>{{ store.data.环境.当前区域 }}</i></span>
    <span class="cy-info-cell"><b>舆论</b><i>{{ store.data.环境.舆论阶段 }}</i></span>
    <span class="cy-info-cell"><b>时间</b><i>{{ store.data.环境.日期 }}&nbsp;{{ store.data.环境.时间段 }}</i></span>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.cy-info {
  display: flex;
  gap: 10px;
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--c-text-mute);
  padding: 8px 0 4px;
  border-bottom: 1px solid var(--c-border);
}
/* 等宽三栏：栏宽固定，内容字数变化只在本栏内裁切，不挤压兄弟栏 → 不跳变 */
.cy-info-cell {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  gap: 4px;
  overflow: hidden;
}
.cy-info-cell b {
  color: var(--c-blue-deep);
  font-weight: normal;
  flex: none;
}
.cy-info-cell i {
  font-style: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
</style>
