<script setup>

const route = useRoute()
const currentCid = ref(Number(route.query.cid))
const currentTab = ref('ranking')
const tabs = ['ranking', 'chartDescription']

const testCharts = [
  {
    'img': '/sana43.png',
    'title': '雪は何色',
    'mode': 'key',
    'diff': '7K Another Lv.16',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid': 126909,
    'sid': 1,
    'mapper': 'DPkaiden'
  },
  {
    'img': '/sana2.png',
    'title': '雪は何色',
    'mode': 'key',
    'diff': '7K Hyper Lv.12',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid': 126910,
    'sid': 1,
    'mapper': 'DPkaiden'
  },
  {
    'img': '/sana43.png',
    'title': '雪は何色',
    'mode': 'key',
    'diff': '7K Normal Lv.7',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid': 126911,
    'sid': 1,
    'mapper': 'DPkaiden'
  },
  {
    'img': '/sana43.png',
    'title': '雪は何色',
    'mode': 'slide',
    'diff': 'Hard Lv.19',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid': 126912,
    'sid': 1,
    'mapper': 'ITOUSHI'
  },
  {
    'img': '/sana43.png',
    'title': '雪は何色',
    'mode': 'taiko',
    'diff': 'Extreme Lv.20',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid': 126913,
    'sid': 1,
    'mapper': 'tkdkendo'
  },
  {
    'img': '/sana43.png',
    'title': '雪は何色',
    'mode': 'taiko',
    'diff': 'Hard Lv.14',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid': 126914,
    'sid': 1,
    'mapper': 'tkdkendo'
  },
  {
    'img': '/sana43.png',
    'title': '雪は何色',
    'mode': 'taiko',
    'diff': 'Normal Lv.7',
    'lastUpdated': '2023-06-12T11:04:00',
    'cid': 126915,
    'sid': 1,
    'mapper': 'tkdkendo'
  },
]

const testSong = {
  'sid': 1,
  'title': '雪は何色',
  'artist': 'Kotoha',
  'cover': '/sana.jpg',
  'length': 89,
  'bpm': 179,
  'tags': ['GalGame', 'FemaleVocal'],
  'description': ''
}


const currentChart = computed(() => {
  const chart = testCharts.find(chart => chart.cid === currentCid.value)
  if (!chart) {
    throw new Error(`Chart with cid ${currentCid.value} not found`)
  }
  return chart
})


useHead({
  bodyAttrs: {
    style: computed(() => {
      if (currentChart.value.img) {
        return "background-image: url('" + currentChart.value.img + "')"
      }
    })
  }
})

function changeCurrentChart(cid) {
  currentCid.value = cid
}

</script>

<template>
  <ChartsSongInfo :song="testSong" :charts="testCharts" :currentChartId="currentCid"
    @otherChartClicked="changeCurrentChart"></ChartsSongInfo>
    <v-tabs class="mt-4 surface" fixed-tabs :align-tabs="'center'" v-model="currentTab">
      <v-tab v-for="tab in tabs" :value="tab"><p class="capitalize">{{ $t(tab) }}</p></v-tab>
    </v-tabs>
  <ChartsRanking v-if="currentTab === 'ranking'" :cid="currentCid"></ChartsRanking>
</template>