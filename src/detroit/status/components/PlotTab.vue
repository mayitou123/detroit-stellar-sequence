<template>
  <div class="cy-plot">
    <div class="cy-plot-phase">{{ store.data.剧情.剧情阶段 || '待初始化' }}</div>
    <div class="cy-plot-tl">
      <div v-for="(desc, name) in events" :key="name" class="cy-plot-node done">
        <span class="cy-plot-dot"></span>
        <div class="cy-plot-body">
          <span class="cy-plot-name">{{ name }}</span>
          <span class="cy-plot-desc">{{ desc }}</span>
        </div>
      </div>
      <div v-if="Object.keys(events).length === 0" class="cy-plot-empty">暂无已触发的关键事件</div>
      <div class="cy-plot-node next">
        <span class="cy-plot-dot"></span>
        <span class="cy-plot-etc">待展开…</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const events = computed(() => store.data.剧情.已触发关键事件 || {});
</script>

<style lang="scss" scoped>
.cy-plot { display:flex; flex-direction:column; gap:8px; }
.cy-plot-phase { font-size:12px; color:var(--c-blue); letter-spacing:3px; text-transform:uppercase; padding-bottom:4px; border-bottom:1px solid var(--c-border); }
.cy-plot-tl { position:relative; padding-left:14px; }
.cy-plot-tl::before { content:''; position:absolute; left:5px; top:4px; bottom:4px; width:1px; background:var(--c-border); }
.cy-plot-node { position:relative; display:flex; align-items:flex-start; gap:10px; padding:4px 0 8px; }
.cy-plot-dot { position:absolute; left:-10px; top:7px; width:7px; height:7px; background:var(--c-blue); transform:rotate(45deg); flex:none; z-index:1; }
.cy-plot-node.done .cy-plot-dot { box-shadow:0 0 6px rgba(74,163,227,.5); }
.cy-plot-node.next .cy-plot-dot { background:transparent; border:1px solid var(--c-text-dim); box-shadow:none; }
.cy-plot-body { display:flex; flex-direction:column; gap:2px; }
.cy-plot-name { font-size:12px; color:var(--c-text); letter-spacing:1px; }
.cy-plot-desc { font-size:10px; color:var(--c-text-dim); line-height:1.5; }
.cy-plot-etc { font-size:10px; color:var(--c-text-dim); letter-spacing:1px; font-style:italic; }
.cy-plot-empty { font-size:11px; color:var(--c-text-dim); padding:12px 0; text-align:center; }
</style>
