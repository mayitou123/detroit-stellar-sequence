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
  justify-content: center;
  gap: 28px;
  font-size: 11px;
  letter-spacing: .5px;
  color: var(--c-text-mute);
  padding: 8px 0 4px;
  border-bottom: 1px solid var(--c-border);
}
.cy-info-cell {
  display: flex;
  gap: 4px;
  align-items: baseline;
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
  max-width: 140px;
}
@media (max-width: 520px) {
  .cy-info {
    gap: 8px;
    font-size: 9px;
  }
  .cy-info-cell {
    gap: 1px;
  }
  .cy-info-cell i {
    max-width: 70px;
  }
}
</style>
