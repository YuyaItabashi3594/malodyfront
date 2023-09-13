<script setup>
const props = defineProps({
  news: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

// TODO:undefined時はデフォルトの奴を出すようにする
const title = props.news.title
console.log(props.news.date)
const date = computed(() => {
  if (props.news.date == undefined) {
    return ''
  } else {
    return props.news.date.substring(0, 10)
  }
})
const description = props.news.description
const img = props.news.img

const isNewerNews = computed(() => {
  if (props.index < 3) // 3 newer news will have image and description
    return true
  else
    return false
})

</script>

<template>
  <div class="flex-row bg-slate-600">
    <img v-if="isNewerNews" class="object-cover h-40 w-full" :src="img" />
    <div class="flex items-center justify-center gap-1 ml-2 py-1 divide-x">
      <p>{{ date }}</p>
      <div class="flex-row pl-1 w-full">
        <p class="font-bold px-1">{{ title }}</p>
        <p v-if="isNewerNews" class="text-sm mt-2">{{ description }}</p>
      </div>
    </div>
  </div>
</template>