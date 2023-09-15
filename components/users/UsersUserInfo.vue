<script setup>
import CountryFlag from 'vue-country-flag-next'

const tags = ['Publisher', 'Editor']

</script>

<template>
  <div class="flex text w-full ">
    <div class="flex-row">
      <img class="object-fill h-36 w-36 rounded-3xl p-2" src="/roadrunner.jpg">
      <div class="text-center -mt-3">
        <CountryFlag country="jp" />
      </div>
    </div>
    <div class="flex-row my-4 items-center justify-center">
      <div class="flex gap-2">
        <p class="text-3xl">DPkaiden</p>
        <p v-for="tag in tags" class="border rounded-lg my-auto px-1">{{ tag }}</p>
      </div>
      <div class="info mt-2">
        <p>{{ $t('gender') }}: 男</p>
      </div>
      <div class="info">
        <p>24{{ $t('yearsOld') }}</p>
      </div>
      <div class="info">
        <p>{{ $t('gold') }}: 114514</p>
        <p>{{ $t('income') }}: 1919</p>
        <p>{{ $t('chartsBeenPlayed') }}: 242d18h58m</p>
      </div>
      <div class="info">
        <p>{{ $t('stableCharts') }}: 150</p>
        <p>{{ $t('unstableCharts') }}: 10</p>
        <p>{{ $t('chartSlots') }}: 160</p>
      </div>
    </div>
    <div class="flex-row mr-2 ml-auto">
      <p>Achievements</p>
      <div class="grid gap-0 grid-cols-5">
        <img src="/katahane.jpg" class="object-fill h-16 w-16">
        <img src="/katahane.jpg" class="object-fill h-16 w-16">
        <img src="/katahane.jpg" class="object-fill h-16 w-16">
        <img src="/35.jpg" class="object-fill h-16 w-16">
        <img src="/35.jpg" class="object-fill h-16 w-16">
        <img src="/35.jpg" class="object-fill h-16 w-16">
      </div>
    </div>
  </div>
  <div class="py-1 pl-2 flex gap-2 text-slate-300 text-sm">
    <p>{{ $t('joined') }}:2017-11-27</p>
    <p>{{ $t('lastLogin') }}:2023-9-14</p>
    <p>{{ $t('totalPlayTime') }}:21h18m</p>
  </div>
</template>

<style scoped>
.info {
  @apply flex gap-3 text-sm
}
</style>