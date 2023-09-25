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

function changeCurrentTab(tab) {
  currentTab.value = tab
}
</script>

<template>
  <Body class="bg-[url('/sana43.png')]" />
  <div class="bg-slate-700 bg-opacity-70 backdrop-blur-sm p-2">
    <UsersUserInfo />
    <div class="mt-10 grid grid-cols-4">
      <div v-for="mode in modes">
        <UsersModeInfo :mode="mode" />
      </div>
    </div>
    <div class="grid grid-cols-3 mt-4 gap-x-4 ">
      <UsersTab v-for="tab in tabs" :tabName="tab" :currentTab="currentTab" @clicked="changeCurrentTab(tab)" />
    </div>
    <div class="mt-6">
      <UsersRecent v-if="currentTab === 'recent'" />
      <UsersChart v-if="currentTab === 'charts'" :chartDatas="testCharts"  />
    </div>
  </div>
</template>