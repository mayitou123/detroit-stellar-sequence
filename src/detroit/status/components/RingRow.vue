<template>
  <div class="cy-rings">
    <div v-for="s in stats" :key="s.key" class="cy-stat">
      <RingLight :state="s.state" />
      <div class="cy-val">{{ s.value }}</div>
      <div class="cy-lbl">{{ s.label }}</div>
      <div class="cy-sub">{{ s.sub }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RingLight from './RingLight.vue';
import { affState, intState, stabState } from '../useRingState';
import { useDataStore } from '../store';

const store = useDataStore();

const stats = computed(() => {
  const p = store.data.主角;
  const [stSt, stSub] = stabState(p.软体稳定度);
  const [afSt, afSub] = affState(p.人类好感度);
  const [inSt, inSub] = intState(p.机体完整度);
  return [
    { key: 'stab', state: stSt, value: p.软体稳定度, label: '软体稳定度', sub: stSub },
    { key: 'aff', state: afSt, value: p.人类好感度, label: '人类好感度', sub: afSub },
    { key: 'int', state: inSt, value: p.机体完整度, label: '机体完整度', sub: inSub },
  ];
});
</script>

<style lang="scss" scoped>
.cy-rings {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 12px;
  margin: 18px 0 10px;
}
.cy-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  width: 150px;
}
.cy-val {
  font-size: 26px;
  font-weight: 200;
  color: var(--c-text);
  font-variant-numeric: tabular-nums;
  text-shadow: 0 0 12px rgba(27, 156, 227, 0.4);
  min-width: 48px;
  text-align: center;
}
.cy-lbl {
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--c-text-mute);
  text-align: center;
}
.cy-sub {
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--c-text-dim);
  height: 14px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
}
</style>
