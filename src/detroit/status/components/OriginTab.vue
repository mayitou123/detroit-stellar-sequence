<template>
  <div class="cy-origin">
    <div v-for="c in chars" :key="c.name" class="cy-op" :class="{ dead: !c.alive }">
      <div class="cy-op-name">{{ c.name }}</div>
      <div class="cy-op-stance">{{ c.stance }}</div>
      <div class="cy-op-recent">{{ c.recent }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const chars = computed(() => {
  const o = store.data.起源角色;
  return [
    { name: '康娜', stance: o.康娜.当前立场, recent: o.康娜.近况, alive: o.康娜.存活 },
    { name: '卡拉', stance: o.卡拉.当前立场, recent: o.卡拉.近况, alive: o.卡拉.存活 },
    { name: '露米娅', stance: o.露米娅.当前立场, recent: o.露米娅.近况, alive: o.露米娅.存活 },
  ];
});
</script>

<style lang="scss" scoped>
.cy-origin {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.cy-op {
  border: 1px solid var(--c-border);
  border-left: 3px solid var(--c-blue);
  border-radius: 3px;
  padding: 8px 10px;
  background: var(--c-panel);
}
.cy-op.dead {
  border-left-color: var(--c-red);
  opacity: 0.55;
}
.cy-op-name {
  font-size: 13px;
  color: var(--c-text);
  letter-spacing: 1px;
  margin-bottom: 4px;
}
.cy-op-stance {
  font-size: 11px;
  color: var(--c-blue);
  margin-bottom: 3px;
}
.cy-op-recent {
  font-size: 10px;
  color: var(--c-text-dim);
  line-height: 1.5;
}
@media (max-width: 520px) {
  .cy-origin {
    grid-template-columns: 1fr;
  }
}
</style>
