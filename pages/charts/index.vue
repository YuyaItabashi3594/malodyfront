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
    'cid':126909,
    'sid': 1,
  },
  {
    'img': '/katahane.jpg',
    'title': 'Alea jacta est!',
    'mode': 'key',
    'diff': '4K Another Lv.17',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid':126909,
    'sid': 1,
  },
  {
    'img': '/sana.jpg',
    'title': '雪は何色',
    'mode': 'key',
    'diff': '7K Another Lv.16',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid':126909,
    'sid': 1,
  },
  {
    'img': '/katahane.jpg',
    'title': 'Alea jacta est!',
    'mode': 'key',
    'diff': '4K Another Lv.17',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid':126909,
    'sid': 1,
  },
  {
    'img': '/sana.jpg',
    'title': '雪は何色',
    'mode': 'key',
    'diff': '7K Another Lv.16',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid':126909,
    'sid': 1,
  },
  {
    'img': '/katahane.jpg',
    'title': 'Alea jacta est!',
    'mode': 'key',
    'diff': '4K Another Lv.17',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid':126909,
    'sid': 1,
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
  <div class="flex w-full mt-10 py-6 pl-4 rounded-lg surface">
    <div class="flex-row ">
      <div class="flex gap-1">
        <p class="w-20 text-center my-auto">Mode</p>
        <v-btn-toggle class="rounded-lg border" v-model="currentMode" rounded="0" color="" group>
            <v-btn v-for="mode in modes" class="text-capitalize" :value="mode">
              <v-text v-if="mode === 'all'">All</v-text>
              <v-img v-else :src="`/${mode}.png`" class="object-fill w-8 rounded-lg cursor-pointer" />
            </v-btn>
          </v-btn-toggle>
      </div>
      <div class="flex gap-1 my-2 mt-6">
        <p class="w-20 text-center my-auto">Status</p>
        <v-btn-toggle
        class="rounded-lg border"
          v-model="currentStatus"
          rounded="0"
          color=""
          group
        >
          <v-btn v-for="status in statuses" class="text-capitalize" :value="status">
            {{ status }}
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
    <div class="flex-row justify-start w-full mx-4">
      <v-text-field clearable hide-details :label="$t('searchCreator')" variant="solo-filled"></v-text-field>
      <v-text-field clearable hide-details class="mt-2" :label="$t('searchTitle')" variant="solo-filled"></v-text-field>
    </div>
  </div>
  <div class="flex items-center justify-center mt-5 text">
    <v-pagination v-model="currentPage" :length="testlength" :total-visible="8" prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right" rounded="circle"></v-pagination>
  </div>
  <div class="grid grid-cols-6 gap-2 mt-5 surface p-2 rounded-lg">
    <ChartContent v-for="chartData in testCharts" :chartData="chartData" />
  </div>
</template>