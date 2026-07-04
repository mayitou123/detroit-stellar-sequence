<template>
  <div class="cy-enc">
    <div v-if="list.length === 0" class="cy-enc-empty">尚未遇见任何人物</div>
    <div v-for="p in list" :key="p.name" class="cy-enc-item" :class="{ dead: !p.alive }">
      <div class="cy-enc-head">
        <span class="cy-enc-name">{{ p.name }}</span>
        <span class="cy-enc-tier" :data-tier="p.tier">{{ p.tierLabel }}</span>
        <span class="cy-enc-aff">{{ p.affection }}</span>
      </div>
      <div class="cy-enc-meta">
        <span class="cy-enc-role">{{ p.role }}</span>
        <span v-if="!p.alive" class="cy-enc-dead">已离世</span>
      </div>
      <div class="cy-enc-recent">{{ p.recent }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

function tierFromAff(v: number): { tier: string; label: string } {
  if (v <= 20) return { tier: 'hostile', label: '敌对' };
  if (v <= 40) return { tier: 'distant', label: '疏远' };
  if (v <= 60) return { tier: 'neutral', label: '中立' };
  if (v <= 80) return { tier: 'close', label: '亲近' };
  return { tier: 'bond', label: '羁绊' };
}

const list = computed(() => {
  const enc = store.data.邂逅名单 || {};
  return Object.entries(enc)
    .map(([name, v]) => {
      const { tier, label } = tierFromAff(v.好感值);
      return {
        name,
        affection: v.好感值,
        tier,
        tierLabel: label,
        role: v.身份 || '',
        alive: v.存活 !== false,
        recent: v.近况 || '',
      };
    })
    .sort((a, b) => b.affection - a.affection);
});
</script>

<style lang="scss" scoped>
.cy-enc { display:flex; flex-direction:column; gap:6px; }
.cy-enc-empty { font-size:11px; color:var(--c-text-dim); text-align:center; padding:16px; }
.cy-enc-item { border:1px solid var(--c-border); border-left:3px solid var(--c-blue); padding:7px 10px; display:flex; flex-direction:column; gap:3px; background:var(--c-panel); }
.cy-enc-item.dead { border-left-color:var(--c-text-dim); opacity:.6; }
.cy-enc-head { display:flex; align-items:baseline; gap:8px; }
.cy-enc-name { font-size:13px; color:var(--c-text); letter-spacing:1px; }
.cy-enc-tier { font-size:10px; letter-spacing:1px; padding:0 5px; border-radius:2px; }
.cy-enc-tier[data-tier='hostile'] { color:var(--c-red); border:1px solid var(--c-red); }
.cy-enc-tier[data-tier='distant'] { color:var(--c-amber); border:1px solid var(--c-amber); }
.cy-enc-tier[data-tier='neutral'] { color:var(--c-text-mute); border:1px solid var(--c-text-mute); }
.cy-enc-tier[data-tier='close'] { color:var(--c-blue); border:1px solid var(--c-blue); }
.cy-enc-tier[data-tier='bond'] { color:var(--c-blue-deep); border:1px solid var(--c-blue-deep); background:rgba(27,156,227,.1); }
.cy-enc-aff { margin-left:auto; font-size:14px; color:var(--c-text); font-variant-numeric:tabular-nums; }
.cy-enc-meta { display:flex; gap:8px; font-size:10px; color:var(--c-text-mute); letter-spacing:.5px; }
.cy-enc-role { color:var(--c-blue-deep); }
.cy-enc-dead { color:var(--c-text-dim); }
.cy-enc-recent { font-size:10px; color:var(--c-text-dim); line-height:1.5; }
</style>
