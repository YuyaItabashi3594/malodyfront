<script setup>

const modes = ['all', 'key', 'taiko', 'jubeat', 'catch', 'slide', 'ring', 'live', 'dancecube']
const statuses = ['all', 'stable', 'beta']
const platforms = ['all', 'PC', 'Pad', 'Phone']
const currentMode = ref('key')
const currentStatus = ref('stable')
const currentPlatform = ref('all')
const isMalodyV = ref(false)

</script>

<template>
  <div class="flex-row w-full mt-10 py-4 pl-4 rounded-lg surface">
    <div class="flex-row w-full">
      <div class="flex">
        <div class="flex gap-1 w-3/4">
          <p class="w-20 text-center my-auto">Mode</p>
          <v-btn-toggle class="rounded-lg border" v-model="currentMode" rounded="0" color="" group>
            <v-btn v-for="mode in modes" class="text-capitalize" :value="mode">
              <v-text v-if="mode === 'all'">All</v-text>
              <v-img v-else :src="`/${mode}.png`" class="object-fill w-8 rounded-lg cursor-pointer" />
            </v-btn>
          </v-btn-toggle>
        </div>
        <div class="flex items-center justify-end w-1/4 mr-4">
          <v-btn variant="tonal">
            <v-icon>mdi-help</v-icon>
            <v-text class="ml-2 text-capitalize">{{ $t('howToUseSkin') }}</v-text>
          </v-btn>
        </div>
      </div>
      <div class="flex gap-1 mt-4">
        <p class="w-20 text-center my-auto">Status</p>
        <v-btn-toggle class="rounded-lg border" v-model="currentStatus" rounded="0" color="" group>
          <v-btn v-for="status in statuses" class="text-capitalize" :value="status">
            {{ status }}
          </v-btn>
        </v-btn-toggle>
      </div>
      <div class="flex gap-1 mt-4">
        <p class="w-20 text-center my-auto">Platform</p>
        <v-btn-toggle class="rounded-lg border" v-model="currentPlatform" rounded="0" color="" group>
          <v-btn v-for="platform in platforms" class="text-capitalize" :value="platform">
            {{ platform }}
          </v-btn>
        </v-btn-toggle>
      </div>
      <div class="flex gap-1 mt-4">
        <v-switch v-model="isMalodyV" label="MalodyV" color="primary"></v-switch>
      </div>
      <div class="flex gap-1">
        <v-btn variant="tonal">
            <v-icon>mdi-upload</v-icon>
            <v-text class="ml-2 text-capitalize">{{ $t('uploadSkin') }}</v-text>
          </v-btn>
      </div>
    </div>
    <v-divider class="mt-2"></v-divider>
    <SkinsList />
  </div>
</template>