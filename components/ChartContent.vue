<script setup>
const props = defineProps({
  chartData: {
    type: Object,
    required: true
  },
})

</script>

<template>
  <div class="flex-row shadow-black text relative">
    <img class="rounded-t-lg object-fill" :src="chartData.img" />
    <div class="flex rounded-b-lg border">
      <img :src="`/${chartData.mode}.png`" class="object-fill h-8 w-8 my-auto ml-0.5" />
      <div class="flew-row ml-0.5">
        <p class="truncate">{{ chartData.title }}</p>
        <p class="truncate text-sm">{{ chartData.diff }}</p>
      </div>
    </div>
    <div class="flex-row absolute top-1 left-2 bg-slate-700 bg-opacity-50 rounded p-1">
      <div>
        <font-awesome-icon :icon="['fas', 'hourglass-half']" size="xs" /><span class="ml-1">{{ chartData.length }}s</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'play']" size="xs" /><span class="ml-1">{{ chartData.playedCount }}</span>
      </div>
    </div>
  </div>
</template>