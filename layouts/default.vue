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
  <Transition name="loading">
    <div v-if="loading" class="fixed inset-0 flex items-center justify-center z-10 w-full h-full">
      <p>loading</p>
    </div>
  </Transition>
  <div class="layout mx-auto px-2">
    <div class="items-center justify-top flex flex-col pb-10">
      <div class="w-full">
        <header class="surfacehighest">
          <Navbar />
        </header>
        <div class="min-h-screen">
          <slot />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>

body {
  background-color: rgb(var(--v-theme-surfacelow));
  color: rgba(var(--v-theme-onsurface), 0.9)
}

header {
  border-bottom: 1px solid rgba(var(--v-theme-outline), 0.9);
}

.surfacelow {
  background-color: rgb(var(--v-theme-surfacelow));
  color: rgba(var(--v-theme-onsurface), 0.9)
}
.surface {
  background-color: rgb(var(--v-theme-surface));
  color: rgba(var(--v-theme-onsurface), 0.9)
}
.surfacehigh {
  background-color: rgb(var(--v-theme-surfacehigh));
  color: rgba(var(--v-theme-onsurface), 0.9)
}
.surfacehighest {
  background-color: rgb(var(--v-theme-surfacehighest));
  color: rgba(var(--v-theme-onsurface), 0.9)
}
.surfacevariant {
  background-color: rgb(var(--v-theme-surfacevariant));
  color: rgba(var(--v-theme-onsurfacevariant), 0.9)
}

.tertiarycontainer {
  background-color: rgb(var(--v-theme-tertiarycontainer));
  color: rgba(var(--v-theme-ontertiarycontainer), 0.9)
}

.loading-leave-active {
  transition: opacity 1.0s ease;
}

.loading-leave-to {
  opacity: 0;
}

.layout {
  height: 100vh;
  width: 1080px;
}
</style>