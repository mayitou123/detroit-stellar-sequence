<template>
  <div class="cy-news">
    <div v-for="n in items" :key="n.label" class="cy-news-item">
      <span class="cy-news-cat">{{ n.label }}</span>
      <span class="cy-news-body">{{ n.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const items = computed(() => {
  const n = store.data.新闻;
  return [
    { label: '科技前沿', text: n.科技前沿 },
    { label: '治安报告', text: n.治安报告 },
    { label: '政经要闻', text: n.政经要闻 },
    { label: '民意风向', text: n.民意风向 },
    { label: '用户论坛', text: n.用户论坛 },
    { label: '娱乐星闻', text: n.娱乐星闻 },
    { label: '警界快讯', text: n.警界快讯 },
    { label: '市井见闻', text: n.市井见闻 },
  ];
});
</script>

<style lang="scss" scoped>
.cy-news {
  display: flex;
  flex-direction: column;
  gap: 7px;
  max-height: 240px;
  overflow-y: auto;
  padding-right: 4px;
}
.cy-news-item {
  font-size: 11px;
  line-height: 1.6;
  color: var(--c-text-mute);
  border-left: 2px solid var(--c-border);
  padding: 4px 8px;
  background: var(--c-panel);
  border-radius: 2px;
}
.cy-news-cat {
  display: inline-block;
  color: var(--c-blue);
  font-weight: bold;
  margin-right: 6px;
  letter-spacing: 1px;
}
.cy-news-body {
  color: var(--c-text-mute);
}
</style>
