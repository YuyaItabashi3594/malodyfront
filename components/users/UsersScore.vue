<script setup>
const props = defineProps({
  scoreData: {
    type: Object,
    required: true
  }
})

const playTimeAgo = useTimeAgo(new Date(props.scoreData.time))
</script>

<template>
  <div class="flex">
    <img :src="scoreData.img" class="object-fill h-20 w-20">
    <div class="flex-row">
      <div class="flex gap-x-1 ml-2">
        <img :src="$t(`/${scoreData.mode}.png`)" class="object-fill h-10 w-10 my-auto">
        <p class="my-auto">{{ scoreData.title }}</p>
        <p class="my-auto">-</p>
        <p class="my-auto">{{ scoreData.diff }}</p>
      </div>
      <div class="flex gap-x-2 ml-2">
        <p>Score: {{ scoreData.score }}</p>
        <p>Combo: {{ scoreData.combo }}</p>
        <p>Acc: {{ scoreData.acc }}%</p>
      </div>
      <p class="text-sm ml-2 text-slate-300">{{ playTimeAgo }}</p>
    </div>
    <div class="flex-row mx-auto">
      <p class="text-center">{{ scoreData.judge }} judge</p>
      <p class="text-center">OP</p>
      <div class="flex flex-wrap">
        <img v-if="!options" v-for="option in scoreData.options" class="object-fill h-8 w-8" :src="`/${option}.png`">
      </div>
    </div>
  </div>
</template>