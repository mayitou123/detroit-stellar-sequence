<template>
  <div class="ring-light" :data-state="props.state"></div>
</template>

<script setup lang="ts">
import type { RingState } from '../useRingState';

const props = defineProps<{ state: RingState }>();
</script>
