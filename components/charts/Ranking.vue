<script setup>

const props = defineProps({
  cid: {
    type: Number,
    required: true
  },
})

const testRanking = [
  {
    'cid': 126909,
    'player': 'DPkaiden',
    'score': 1000000,
    'combo': 1000,
    'rank': 1,
    'accuracy': 99.99,
    'judge': 'E',
    'mod': 'dash',
    'timestamp': '2023-06-12T11:04:00',
    'img': '/roadrunner.jpg'
  },
  {
    'cid': 126909,
    'player': 'DPchuden',
    'score': 900000,
    'combo': 900,
    'rank': 2,
    'accuracy': 98.88,
    'judge': 'E',
    'mod': '',
    'timestamp': '2023-07-12T11:04:00',
    'img': '/coyote.png'
  },
  {
    'cid': 126909,
    'player': 'DP10dan',
    'score': 800000,
    'combo': 800,
    'rank': 3,
    'accuracy': 98.88,
    'judge': 'E',
    'mod': '',
    'timestamp': '2023-07-12T11:04:00',
    'img': '/coyote.png'
  },
  {
    'cid': 126909,
    'player': 'YJSNPI',
    'score': 114514,
    'combo': 810,
    'rank': 4,
    'accuracy': 19.19,
    'judge': 'B',
    'mod': '',
    'timestamp': '2023-08-10T11:45:14',
    'img': '/YJSNPI.jpg'
  }
]

</script>

<template>

  <v-table>
    <thead>
      <tr>
        <th class="w-10">Rank</th>
        <th class="w-12"></th>
        <th class="text-left">
          Player
        </th>
        <th class="text-left">
          Score
        </th>
        <th class="text-left">
          Combo
        </th>
        <th class="text-left">
          Acc
        </th>
        <th>
          Mod
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in testRanking" :key="item.name">
        <td class="text-center">{{ item.rank }}</td>
        <td>
          <v-avatar rounded="lg">
            <v-img :src="item.img" />
          </v-avatar>
        </td>

        <td>{{ item.player }}</td>
        <td>
          <p class="text-xl">{{ item.score }}</p>
          <p style="font-size:0.65rem;">1000/100/100/10</p>
        </td>
        <td>{{ item.combo }}</td>
        <td>
          <p>{{ item.accuracy }}%</p>
          <p>Judge {{ item.judge }}</p>
        </td>
        <td>
          <img v-if="item.mod" :src="`/${item.mod}.png`" class="object-scale-down h-8 w-8" />
        </td>

      </tr>
    </tbody>
  </v-table>
</template>
