<script setup lang="ts">
const props = defineProps({
  youtube: {
    type: String,
  },
  class: {
    type: String,
  },
})

const getYouTubeEmbedUrl = (url: string) => {
  // Handle different YouTube URL formats
  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1].split('&')[0]
    return `https://www.youtube.com/embed/${videoId}`
  } else if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0]
    return `https://www.youtube.com/embed/${videoId}`
  } else if (url.includes('youtube.com/embed/')) {
    return url
  } else {
    // Assume it's just a video ID
    return `https://www.youtube.com/embed/${url}`
  }
}
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
    <div class="slidev-layout default" :class="props.class">
      <slot />
    </div>
    <div class="w-full h-full flex items-center justify-center">
      <iframe 
        v-if="props.youtube"
        :src="getYouTubeEmbedUrl(props.youtube)"
        class="w-full h-full"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>