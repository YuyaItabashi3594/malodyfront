<script setup>
const props = defineProps({
  slide: Object,
  isLinkActive: Boolean,
  isNewChart: {
    type: Boolean,
    default: false
  },
  playcount: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <NuxtLink v-if="isLinkActive" :to="slide.url">
    <p v-if="props.isNewChart" class="fixed rounded-lg top-1 ml-1 bg-blue-400 bg-opacity-70 px-1">New!</p>
    <p v-if="props.playcount > 0" class="fixed rounded-lg top-1 ml-1 bg-blue-400 bg-opacity-70 px-1">{{ props.playcount }}</p>
    <img :src="slide.img" class="rounded-lg object-fill h-40 w-40" />
  </NuxtLink>
  <div v-else>
    <p v-if="props.isNewChart" class="fixed rounded-lg top-1 ml-1 bg-blue-400 bg-opacity-70 px-1">New!</p>
    <p v-if="props.playcount > 0" class="fixed rounded-lg top-1 ml-1 bg-blue-400 bg-opacity-70 px-1">{{ props.playcount }}</p>
    <img :src="slide.img" @click="$emit('clicked')" class="rounded-lg object-fill h-40 w-40" />
  </div>
</template>