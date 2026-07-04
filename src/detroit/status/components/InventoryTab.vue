<template>
  <div class="cy-inv">
    <div v-if="items.length === 0" class="cy-inv-empty">物品栏为空</div>
    <div v-for="it in items" :key="it.name" class="cy-inv-item">
      <div class="cy-inv-head">
        <span class="cy-inv-name">{{ it.name }}</span>
        <span class="cy-inv-qty">×{{ it.qty }}</span>
      </div>
      <div class="cy-inv-desc">{{ it.desc }}</div>
    </div>

    <div v-if="abilities.length" class="cy-inv-sec">
      <div class="cy-inv-title">特殊能力</div>
      <div v-for="a in abilities" :key="a.name" class="cy-inv-ability">
        <span class="cy-inv-abname">{{ a.name }}</span>
        <span class="cy-inv-abdesc">{{ a.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash';
import { useDataStore } from '../store';

const store = useDataStore();

const items = computed(() => {
  const bag = store.data.主角.物品栏;
  return _.entries(bag).map(([name, v]) => ({ name, desc: v.描述, qty: v.数量 }));
});

const abilities = computed(() => {
  const ab = store.data.主角.特殊能力;
  return _.entries(ab).map(([name, desc]) => ({ name, desc }));
});
</script>

<style lang="scss" scoped>
.cy-inv {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 240px;
  overflow-y: auto;
  padding-right: 4px;
}
.cy-inv-empty {
  font-size: 11px;
  color: var(--c-text-dim);
  text-align: center;
  padding: 16px;
}
.cy-inv-item {
  border: 1px solid var(--c-border);
  border-radius: 3px;
  padding: 7px 10px;
  background: var(--c-panel);
}
.cy-inv-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 3px;
}
.cy-inv-name {
  font-size: 13px;
  color: var(--c-text);
  letter-spacing: 1px;
}
.cy-inv-qty {
  font-size: 11px;
  color: var(--c-blue);
  font-variant-numeric: tabular-nums;
}
.cy-inv-desc {
  font-size: 10px;
  color: var(--c-text-dim);
  line-height: 1.5;
}
.cy-inv-sec {
  margin-top: 6px;
  border-top: 1px dashed var(--c-border);
  padding-top: 8px;
}
.cy-inv-title {
  font-size: 11px;
  color: var(--c-blue);
  letter-spacing: 2px;
  margin-bottom: 6px;
}
.cy-inv-ability {
  font-size: 11px;
  line-height: 1.6;
  color: var(--c-text-mute);
  padding: 3px 0;
}
.cy-inv-abname {
  display: inline-block;
  color: var(--c-text);
  margin-right: 6px;
}
</style>
