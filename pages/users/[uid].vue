<script setup>
const modes = ['key', 'taiko', 'catch', 'slide']
const tabs = ['recent', 'charts', 'profile']
const currentTab = ref('recent')

function changeCurrentTab(tab) {
  currentTab.value = tab
}
</script>

<template>
  <Body class="bg-[url('/sana43.png')]" />
  <div class="bg-slate-700 bg-opacity-70 backdrop-blur-sm p-2">
    <UsersUserInfo />
    <div class="mt-10 text grid grid-cols-4">
      <div v-for="mode in modes">
        <UsersModeInfo :mode="mode" />
      </div>
    </div>
    <div class="text grid grid-cols-3 mt-4 gap-x-4 ">
      <UsersTab v-for="tab in tabs" :tabName="tab" :currentTab="currentTab" @clicked="changeCurrentTab(tab)" />
    </div>
    <div class="mt-6">
      <UsersRecent v-if="currentTab === 'recent'" />
    </div>
  </div>
</template>