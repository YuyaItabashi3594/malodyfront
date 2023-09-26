<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const articleAmount = 10
const query: QueryBuilderParams = ref({ path: '/news', limit: articleAmount, sort: [{ date: -1 }] })
</script>

<template>
  <div class="h-auto mt-4 px-2">
    <p class="text-2xl ml-2">{{ $t('news') }}</p>
    <div class="mt-4 rounded-lg">
      <ContentList :query="query" v-slot="{ list }">
        <article v-for="(news, index) in list" :key="news._path">
          <div :class="[index < 4 ? 'mt-2' : '']">
            <NewsContent :news="news" :index="index" />
          </div>
          <div class="divider">
            <v-divider></v-divider>
          </div>
        </article>
      </ContentList>
    </div>
  </div>
</template>
