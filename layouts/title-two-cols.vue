<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- Title section spanning full width -->
    <div class="slidev-layout-title mb-8" :class="props.class">
      <slot name="title" />
    </div>
    
    <!-- Two-column content section -->
    <div class="grid grid-cols-2 flex-1 gap-8">
      <div class="slidev-layout-left">
        <slot name="left" />
      </div>
      <div class="slidev-layout-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout-title {
  padding: 0 2rem;
}

.slidev-layout-left,
.slidev-layout-right {
  padding: 0 1rem;
}
</style>