<script setup>
const modes = ['key', 'taiko', 'catch', 'slide']
const tabs = ['recent', 'charts', 'profile']
const currentTab = ref('recent')

const testCharts = [
  {
    'img': '/sana.jpg',
    'title': '雪は何色',
    'mode': 'key',
    'diff': '7K Another Lv.16',
    'length': 89,
    'playedCount': 660,
    'lastUpdated': '2023-06-12T11:04:00',
  },
  {
    'img': '/katahane.jpg',
    'title': 'Alea jacta est!',
    'mode': 'key',
    'diff': '4K Another Lv.17',
    'length': 97,
    'playedCount': 3924,
    'lastUpdated': '2023-06-12T11:04:00',
  }
]


</script>

<template>
  <Body class="bg-[url('/sana43.png')]" />
  <div class="surfaceopacity backdrop-blur-sm p-2">
    <UsersUserInfo />
    <div class="mt-10 grid grid-cols-4">
      <div v-for="mode in modes">
        <UsersModeInfo :mode="mode" />
      </div>
    </div>
    <v-tabs class="mt-4" fixed-tabs :align-tabs="'center'" v-model="currentTab">
      <v-tab v-for="tab in tabs" :value="tab">{{ $t(tab) }}</v-tab>
    </v-tabs>
    <div class="mt-6 surfaceopacity p-2">
      <UsersRecent v-if="currentTab === 'recent'" />
      <UsersChart v-if="currentTab === 'charts'" :chartDatas="testCharts" />
    </div>
  </div>
</template>

<style scoped>
.surfaceopacity {
  background-color: rgba(var(--v-theme-surface), 0.7);
  color: rgba(var(--v-theme-onsurface), 0.9)
}
.surfacehighestopacity {
  background-color: rgba(var(--v-theme-surfacehigh), 0.7);
  color: rgba(var(--v-theme-onsurface), 0.9)
}
</style>