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
  justify-content: center;
  gap: 36px;
  margin: 18px auto 10px;
}
.cy-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 110px;
}
.cy-val {
  font-size: 22px;
  font-weight: 200;
  color: var(--c-text);
  font-variant-numeric: tabular-nums;
  text-shadow: 0 0 12px rgba(27, 156, 227, 0.4);
  text-align: center;
  line-height: 1;
}
.cy-lbl {
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--c-text-mute);
  text-align: center;
  white-space: nowrap;
}
.cy-sub {
  font-size: 10px;
  letter-spacing: .5px;
  color: var(--c-text-dim);
  text-align: center;
  line-height: 1.3;
  min-height: 14px;
}
@media (max-width: 520px) {
  .cy-rings {
    gap: 12px;
  }
  .cy-stat {
    width: auto;
    flex: 1 1 0;
    min-width: 0;
  }
  .ring-light {
    width: 40px;
    height: 40px;
  }
  .cy-val {
    font-size: 16px;
  }
  .cy-lbl {
    font-size: 9px;
    letter-spacing: 0;
  }
  .cy-sub {
    font-size: 8px;
  }
}
</style>
