<template>
  <nav class="cy-tabs">
    <button
      v-for="tab in props.tabs"
      :key="tab.id"
      class="cy-tab-btn"
      :class="{ active: model === tab.id }"
      @click="select(tab.id)"
    >
      {{ tab.label }}
    </button>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{ tabs: { id: string; label: string }[] }>();
const model = defineModel<string>({ required: true });

function select(id: string) {
  model.value = id;
}
</script>

<style lang="scss" scoped>
.cy-tabs {
  display: flex;
  margin-top: 12px;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  overflow: hidden;
}
.cy-tab-btn {
  flex: 1;
  padding: 8px 4px;
  border: none;
  background: transparent;
  color: var(--c-text-mute);
  font-size: 12px;
  letter-spacing: 1px;
  font-family: var(--font-mono);
  cursor: pointer;
  transition: all 0.2s;
  border-right: 1px solid var(--c-border);
}
.cy-tab-btn:last-child {
  border-right: none;
}
.cy-tab-btn:hover {
  background: rgba(27, 156, 227, 0.12);
  color: var(--c-text);
}
.cy-tab-btn.active {
  background: rgba(27, 156, 227, 0.22);
  color: var(--c-blue);
  text-shadow: 0 0 8px rgba(74, 163, 227, 0.5);
}
@media (max-width: 520px) {
  .cy-tab-btn {
    font-size: 10px;
    padding: 7px 2px;
    letter-spacing: 0;
  }
}
</style>
