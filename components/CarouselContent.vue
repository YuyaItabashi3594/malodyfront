<script setup>
const props = defineProps({
  slide: Object,
  isLinkActive: Boolean,
})
</script>

<template>
  <NuxtLink v-if="isLinkActive" :to="slide.url">
    <img :src="slide.img" class="rounded-lg object-fill h-40 w-40" />
  </NuxtLink>
  <div v-else>
    <img :src="slide.img" @click="$emit('clicked')" class="rounded-lg object-fill h-40 w-40" />
  </div>
</template>