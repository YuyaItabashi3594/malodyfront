<script setup>
const props = defineProps({
  chartData: {
    type: Object,
    required: true
  },
})

</script>

<template>
  <NuxtLink :to="{ path:`/charts/${chartData.sid}` , query:{ cid:chartData.cid}}">
  <div class="rounded-lg flex-row shadow-black relative surfacehighest">
    <img class="object-fill rounded-t-lg" :src="chartData.img" />
    <div class="flex">
      <img :src="`/${chartData.mode}.png`" class="object-fill h-8 w-8 my-auto ml-0.5" />
      <div class="flew-row ml-0.5 mt-1">
        <p class="truncate">{{ chartData.title }}</p>
        <p class="truncate text-sm">{{ chartData.diff }}</p>
      </div>
    </div>
    <div v-if="chartData.length && chartData.playedCount" class="flex-row absolute top-1 left-2 tertiaryopacity rounded p-1">
      <div>
        <font-awesome-icon :icon="['fas', 'hourglass-half']" size="xs" /><span class="ml-1">{{ chartData.length }}s</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'play']" size="xs" /><span class="ml-1">{{ chartData.playedCount }}</span>
      </div>
    </div>
  </div>
  </NuxtLink>
</template>

<style scoped>
.tertiaryopacity {
  background-color: rgba(var(--v-theme-tertiary),0.6);
  color: rgba(var(--v-theme-ontertiary), 0.9)
}

</style>