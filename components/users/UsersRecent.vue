<script setup>
const testActivities = [
  {
    'text': 'DPkaiden achieved the top of Suishoutou no orca - 6K Expert Lv.25',
    'time': '2023-09-14T11:04:00',
  },
  {
    'text': 'DPkaiden update cover of a little more',
    'time': '2023-07-13T22:58:00',
  }]

const testScoreDatas = [
  {
    'img': '/sana.jpg',
    'mode': 'key',
    'title': 'Yuki wa Naniiro',
    'diff': '7K Another Lv.16',
    'score': 1850139,
    'combo': 827,
    'acc': 97.76,
    'judge': 'E',
    'options': ['mirror','dash'],
    'time': '2023-09-12T11:04:00',
}]
</script>

<template>
  <div class="flex text">
    <div class="w-1/2">
      <p class="text-center text-xl mb-4">{{ $t('activities') }}</p>
      <UsersActivity v-for="activity in testActivities" :text="activity.text" :time="activity.time" />
    </div>
    <div class="w-1/2">
      <p class="text-center text-xl mb-4">{{ $t('highscores') }}</p>
      <UsersScore v-for="score in testScoreDatas" :scoreData="score" />
    </div>
  </div>
</template>