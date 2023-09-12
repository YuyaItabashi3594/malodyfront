<script setup>
const props = defineProps({
  news: {
    type: Object,
    required: true
  }
})

const title = props.news.title
const date = props.news.date.substr(0, 10)
const description = props.news.description
const img = props.news.img

</script>

<template>
  <div class="flex-row">
    <img class="object-cover h-40 w-full" :src="img" />
    <div class="flex items-center justify-center gap-1 ml-2 my-1 py-1 divide-x">
      <p>{{ date }}</p>
      <div class="flex-row pl-1">
        <p class="font-bold">{{ title }}</p>
        <p class="text-sm mt-2">{{ description }}</p>
      </div>
    </div>
  </div>
</template>