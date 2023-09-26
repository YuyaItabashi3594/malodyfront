<script setup>
import axios from 'axios'

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
const testlength = 20
const currentPage = ref(1)

const modes = ['all', 'key', 'taiko', 'jubeat', 'catch', 'slide', 'ring', 'live', 'dancecube']
const statuses = ['all', 'stable', 'beta', 'alpha']
const currentMode = ref('key')
const currentStatus = ref('stable')
const inputCreator = ref('')
const inputTitle = ref('')
</script>

<template>
  <div class="flex w-full mt-10 py-4 pl-4 rounded-lg surface">
    <div class="flex-row w-1/2">
      <div class="flex gap-1">
        <p class="w-20 text-center my-auto">Mode</p>
        <div v-for="mode in modes">
          <p @click="currentMode = 'all'" :class="[currentMode === 'all' ? 'bg-slate-400' : '']"
            class="text-center text-lg pt-2 h-10 w-10 border rounded-lg cursor-pointer" v-if="mode === 'all'">All</p>
          <img @click="currentMode = mode" :class="[currentMode === mode ? 'bg-slate-400' : '']" v-if="mode != 'all'"
            :src="`/${mode}.png`" class="object-fill h-10 w-10 rounded-lg cursor-pointer" />
        </div>
      </div>
      <div class="flex gap-1 my-2 mt-2">
        <p class="w-20 text-center my-auto">Status</p>
        <v-radio-group class="h-10 -ml-2" inline :model-value="currentStatus">
          <div class="capitalize" v-for="status in statuses">
            <v-radio :label="status" :value="status"></v-radio>
          </div>
        </v-radio-group>
      </div>
    </div>
    <div class="flex-row justify-start w-1/2 mr-4">
      <v-text-field hide-details :label="$t('searchCreator')" variant="solo-filled"></v-text-field>
      <v-text-field hide-details class="mt-2" :label="$t('searchTitle')" variant="solo-filled"></v-text-field>
    </div>
  </div>
  <div class="flex items-center justify-center mt-5 text">
    <v-pagination v-model="currentPage" :length="testlength" :total-visible="8" prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right" rounded="circle"></v-pagination>
  </div>
  <div class="grid grid-cols-6 gap-2 mt-5 surface p-2">
    <ChartContent v-for="chartData in testCharts" :chartData="chartData" />
  </div>
</template>