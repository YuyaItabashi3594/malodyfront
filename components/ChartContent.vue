<script setup>
const props = defineProps({
  chartData: {
    type: Object,
    required: true
  },
})

</script>

<template>
  <NuxtLink :to="{ path: `/charts/${chartData.sid}`, query: { cid: chartData.cid } }">
    <v-hover v-slot="{ isHovering, props }">
      <v-card v-bind="props">
        <v-img :src="chartData.img" class="rounded-t-lg" />
        <div class="flex">
          <v-img class="-mr-3" style="min-width:34px; max-width: 34px;" :src="`/${chartData.mode}.png`"></v-img>
          <v-card-item>
            <p class="text-sm truncate" style="max-width:120px">{{ chartData.title }}</p>
            <p class="text-xs">{{ chartData.diff }}</p>
          </v-card-item>
        </div>
        <v-overlay
          :model-value="isHovering"
          contained
          class="align-center justify-center"
        >
        </v-overlay>
      </v-card>
    </v-hover>
  </NuxtLink>
</template>

<style scoped>
.tertiaryopacity {
  background-color: rgba(var(--v-theme-tertiary), 0.6);
  color: rgba(var(--v-theme-ontertiary), 0.9)
}
</style>