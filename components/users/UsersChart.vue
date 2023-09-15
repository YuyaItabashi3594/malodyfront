<script setup>
const props = defineProps({
  chartDatas: {
    type: Object,
    required: true
  },
})

</script>

<template>
  <div class="grid grid-cols-6 gap-2">
    <ChartContent v-for="chartData in chartDatas" :chartData="chartData" />
  </div>
</template>