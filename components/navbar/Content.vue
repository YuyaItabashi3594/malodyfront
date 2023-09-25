<script setup>
const props = defineProps({
  text: String,
  url: String,
})
const urlWithoutSlash = props.url.slice(1)
const route = useRoute()
</script>

<template>
  <NuxtLink :to="url">
    <div class="w-auto cursor-pointer">
      <div class="transition duration-75"
      :class="route.path.includes(urlWithoutSlash) && urlWithoutSlash != '' ? 'border-b border-gray-400' : ''"
      >
        <p class="text-center py-1 px-2">{{ $t(`${props.text}`) }}</p>
      </div>
    </div>
  </NuxtLink>
</template>