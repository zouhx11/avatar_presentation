<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '@slidev/client/layoutHelper.ts'

const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
})

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>
  <div class="grid grid-cols-3 w-full h-full auto-rows-fr">
    <div class="col-span-2 slidev-layout default" :class="props.class">
      <slot />
    </div>
    <div class="col-span-1 w-full h-full" :style="style" />
  </div>
</template>