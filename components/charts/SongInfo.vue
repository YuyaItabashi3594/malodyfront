<script setup>
import VueMarkdown from 'vue-markdown-render'
const props = defineProps({
  song: {
    type: Object,
    required: true
  },
  charts: {
    type: Array,
    required: true
  },
  currentChartId: {
    type: Number,
    required: true
  }
})
const testModes = ['key', 'slide', 'taiko', 'pad']
const openedMode = ref()

const separatedChartsByMode = computed(() => {
  const separatedCharts = {}
  testModes.forEach(mode => {
    separatedCharts[mode] = searchSpecificModeChart(mode)
  })
  return separatedCharts
})

const dummyTags = ['hoge', 'fuga', 'piyo', 'foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud']

const markdownContent = ref('')
const fetchMarkdown = async () => {
  const filePath = `../markdown/${props.song.sid}.md`;
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      console.log(data)
      markdownContent.value = data
    })
    .catch(error => {
      console.error(error);
    });
}

const searchSpecificModeChart = (mode) => {
  return props.charts.filter(chart => chart.mode === mode)
}

onMounted(() => {
  fetchMarkdown()
})


</script>

<template>
  <div class="flex">
    <v-card class="surfacehighestopacity min-w-[67%]">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h4 mt-4">
            {{ song.title }}
          </v-card-title>

          <v-card-subtitle class="text-h6 mt-2">{{ song.artist }}</v-card-subtitle>
          <div class="flex mt-1">
            <v-card-subtitle>{{ song.bpm }} BPM</v-card-subtitle>
            <v-card-subtitle>{{ song.length }}s</v-card-subtitle>
            <v-card-subtitle>sid:{{ song.sid }}</v-card-subtitle>
          </div>
          <div class="ml-2 mb-4">
            <v-chip v-for="tag in song.tags" class="primarycontaineropacity mt-1 mr-1">{{ tag }}</v-chip>
            <v-chip v-for="tag in dummyTags" class="primarycontaineropacity mt-1 mr-1">{{ tag }}</v-chip>
          </div>
        </div>
        <v-avatar class="m-3" size="200" rounded="0">
          <v-img :src="song.cover"></v-img>
        </v-avatar>
      </div>
      <div class="mt-4">
        <p class="text-lg font-semibold ml-4">{{ $t('songDescription') }}</p>
        <v-divider class="mt-1"></v-divider>
        <vue-markdown class="markdown mt-4 px-4 overflow-auto h-80" :source="markdownContent"></vue-markdown>
      </div>
    </v-card>
    <v-card class="min-w-[33%] surfaceopacity">
      <v-list :max-height="619" v-model:opened="openedMode">
        <v-list-group v-for="mode in testModes" :value="mode">
          <template v-slot:activator="{ props }">
            <v-list-item class="" v-bind="props">
              <v-list-item-content class="d-flex">
                <v-list-item-avatar tile>
                  <v-img class="object-scale-down h-10 w-10" :src="`/${mode}.png`"></v-img>
                </v-list-item-avatar>
                <v-list-item-title class="ml-4 my-auto">{{ mode }} ({{ separatedChartsByMode[mode].length }})</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list v-for="chart in separatedChartsByMode[mode]" :key="chart.cid">
            <v-list-item>
              <p class="my-auto">{{ chart.diff }}</p>
              <p class="text-xs my-auto">by {{ chart.mapper }}</p>
            </v-list-item>
          </v-list>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>

<style scoped>
.primaryopacity {
  background-color: rgba(var(--v-theme-primary), 0.92);
  color: rgba(var(--v-theme-onprimary), 0.95)
}

.primarycontaineropacity {
  background-color: rgb(var(--v-theme-primarycontainer), 0.8);
  color: rgba(var(--v-theme-onprimarycontainer), 0.9)
}

.secondaryopacity {
  background-color: rgba(var(--v-theme-secondary), 0.92);
  color: rgba(var(--v-theme-onsecondary), 0.95)
}

.secondarycontaineropacity {
  background-color: rgb(var(--v-theme-secondarycontainer), 0.8);
  color: rgba(var(--v-theme-onsecondarycontainer), 0.9)
}

.surfaceopacity {
  background-color: rgba(var(--v-theme-surface), 0.90);
  color: rgba(var(--v-theme-onsurface), 0.9)
}

.surfacehighestopacity {
  background-color: rgba(var(--v-theme-surfacehigh), 0.95);
  color: rgba(var(--v-theme-onsurface), 0.9)
}
</style>
