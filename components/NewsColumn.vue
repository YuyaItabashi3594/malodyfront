<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const articleAmount = 10
const query: QueryBuilderParams = ref({ path: '/news', limit: articleAmount, sort: [{ date: -1 }] })
</script>

<template>
  <div class="h-auto text ml-6 mb-4">
    <p class="text-slate-200 text-2xl">News</p>
    <div class="mt-4 rounded-lg">
      <ContentList :query="query" v-slot="{ list }">
        <article v-for="(news, index) in list" :key="news._path">
          <div :class="[index < 4 ? 'mt-4' : '']">
            <NewsContent :news="news" :index="index" />
          </div>
        </article>
      </ContentList>
    </div>
  </div>
</template>