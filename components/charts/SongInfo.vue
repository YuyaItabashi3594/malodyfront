<script setup>
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

const dummyTags = ['hoge', 'fuga', 'piyo', 'foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud']

</script>

<template>
  <div class="flex">
    <v-card class="primaryopacity min-w-[67%]">
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
    </v-card>
    <v-card class="min-w-[33%] secondaryopacity" max-width="300">
      <div class="flex">
        <v-select :label="$t('mode')" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
        <v-select :label="$t('status')" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
      </div>
      <v-select label="Select" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
      <v-list class="secondarycontaineropacity">
        <v-list-item
        v-for="chart in charts"
        :key="chart"
        :title="chart.diff"
        :prepend-avatar="`/${chart.mode}.png`"
        :value="chart.cid"
        :active="chart.cid === currentChartId"
        @click="$emit('otherChartClicked',chart.cid)">
        </v-list-item>
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
</style>