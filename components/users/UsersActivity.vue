<script setup>
import { useTimeAgo } from '@vueuse/core'
const props = defineProps({
  text: String,
  time: String
})

const dateTypeTime = new Date(props.time)
const timeAgo = useTimeAgo(dateTypeTime)

</script>

<template>
  <div class="flex divide-x">
    <p class="text-sm text-center my-auto ml-2 w-1/5">{{ timeAgo }}</p>
    <p class="text-lg pl-2 w-4/5">{{ props.text }}</p>
  </div>
</template>