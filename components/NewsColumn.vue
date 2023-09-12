<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const articlesPerPage = 5
const query: QueryBuilderParams = ref({ path: '/news', limit: articlesPerPage, sort: [{ date: -1 }] })
</script>

<template>
  <div class="h-auto text ml-10">
    <p class="text-slate-200 text-2xl">News</p>
    <div class="bg-slate-600 mt-4 rounded-lg">
      <ContentList :query="query" v-slot="{ list }">
        <article v-for="news in list" :key="news._path">
          <NewsContent :news="news" />
        </article>
      </ContentList>
    </div>
  </div>
</template>