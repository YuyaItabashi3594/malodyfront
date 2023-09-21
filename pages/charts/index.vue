<script setup>
import axios from 'axios'
import { UseOffsetPagination } from '@vueuse/components';

const fetchData = async () => {
  try {
    const response = await axios.get('https://m.mugzone.net/page/chart/filter', {
      params: {
        status: 0,
        count: 18,
        mode: 5,
        tag: 0,
        creator: '',
        key: '',
        next: 1695116567,
        page: 0
      },
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
    const data = response.data
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

fetchData()

const testCharts = [
  {
    'img': '/sana.jpg',
    'title': '雪は何色',
    'mode': 'key',
    'diff': '7K Another Lv.16',
    'lastUpdated': '2023-06-12T11:04:00',
  },
  {
    'img': '/katahane.jpg',
    'title': 'Alea jacta est!',
    'mode': 'key',
    'diff': '4K Another Lv.17',
    'lastUpdated': '2023-06-12T11:04:00',
  },
  {
    'img': '/sana.jpg',
    'title': '雪は何色',
    'mode': 'key',
    'diff': '7K Another Lv.16',
    'lastUpdated': '2023-06-12T11:04:00',
  },
  {
    'img': '/katahane.jpg',
    'title': 'Alea jacta est!',
    'mode': 'key',
    'diff': '4K Another Lv.17',
    'lastUpdated': '2023-06-12T11:04:00',
  },
  {
    'img': '/sana.jpg',
    'title': '雪は何色',
    'mode': 'key',
    'diff': '7K Another Lv.16',
    'lastUpdated': '2023-06-12T11:04:00',
  },
  {
    'img': '/katahane.jpg',
    'title': 'Alea jacta est!',
    'mode': 'key',
    'diff': '4K Another Lv.17',
    'lastUpdated': '2023-06-12T11:04:00',
  }
]
const testlength = 10

const modes = ['all', 'key', 'taiko', 'catch', 'slide', 'ring']
const statuses = ['all', 'stable', 'beta', 'alpha']
const currentMode = ref('key')
const currentStatus = ref('stable')
const inputCreator = ref('')
const inputTitle = ref('')
</script>

<template>
  <div class="flex p-4 mt-10 bg-slate-700 rounded-lg">
    <div class="flex-row">
      <div class="flex gap-1">
        <p class="text w-20 text-center my-auto">Mode</p>
        <div v-for="mode in modes">
          <p @click="currentMode = 'all'" :class="[currentMode === 'all' ? 'bg-slate-400' : '']"
            class="text text-center text-lg pt-2 h-12 w-12 border rounded-lg cursor-pointer" v-if="mode === 'all'">All</p>
          <img @click="currentMode = mode" :class="[currentMode === mode ? 'bg-slate-400' : '']" v-if="mode != 'all'"
            :src="`/${mode}.png`" class="object-fill h-12 w-12 rounded-lg cursor-pointer" />
        </div>
      </div>
      <div class="flex gap-1 mt-2">
        <p class="text w-20 text-center my-auto">Status</p>
        <div v-for="status in statuses">
          <p @click="currentStatus = status" :class="[currentStatus === status ? 'text' : '']"
            class="text-slate-400 capitalize text-center px-4 cursor-pointer">{{ status }}</p>
        </div>
      </div>
      <div class="flex">
        <p class="text w-20 text-center my-auto pt-1">Creator</p>
        <input :value="inputCreator" :placeholder="$t('searchCreator')"
          class="mt-2 w-80 border rounded-lg border-slate-200" />
      </div>
      <div class="flex">
        <p class="text w-20 text-center my-auto pt-1">Title</p>
        <input :value="inputTitle" :placeholder="$t('searchTitle')"
          class="mt-2 w-80 border rounded-lg border-slate-200" />
        <button class="text ml-10 border rounded-lg px-4 py-1">{{ $t('search') }}</button>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center mt-5 text">
    <UseOffsetPagination v-slot="{
      currentPage,
      currentPageSize,
      next,
      prev,
      pageCount,
      isFirstPage,
      isLastPage
    }" :total="testlength" :pageSize="2">
      <div class="w-10 text-center">
        <font-awesome-icon v-if="!isFirstPage" @click="prev" :icon="['fas', 'arrow-left']" />
      </div>
      <p class="mx-2">{{ currentPage }} / {{ pageCount }}</p>
      <div class="w-10 text-center">
        <font-awesome-icon v-if="!isLastPage" @click="next" :icon="['fas', 'arrow-right']" />
      </div>
    </UseOffsetPagination>
  </div>
  <div class="grid grid-cols-6 gap-2 mt-5 bg-slate-700">
    <ChartContent v-for="chartData in testCharts" :chartData="chartData" />
  </div>
</template>