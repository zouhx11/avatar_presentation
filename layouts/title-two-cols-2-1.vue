<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="w-full h-full flex flex-col pt-4">
    <!-- Title section spanning full width -->
    <div class="slidev-layout default text-center mb-2" :class="props.class">
      <slot name="title" />
    </div>
    
    <!-- Two-column content section with 2:1 ratio -->
    <div class="grid grid-cols-3 flex-1 gap-6">
      <div class="col-span-2 slidev-layout default">
        <slot name="left" />
      </div>
      <div class="col-span-1 slidev-layout default">
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