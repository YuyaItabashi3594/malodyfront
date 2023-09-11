<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<template>
  <Transition>
    <div v-if="loading" class="fixed inset-0 flex items-center justify-center z-10 w-full h-full">
      <p>loading</p>
    </div>
  </Transition>
  <div class="h-auto min-h-screen">
    <div class="items-center justify-top flex flex-col pb-10">
      <div class="w-full">
        <header>
          <Navbar />
        </header>
        <div class="">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-slate-700;
}
</style>