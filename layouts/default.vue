<script setup lang="ts">
import { useTheme } from 'vuetify'
const nuxtApp = useNuxtApp();
const loading = ref(true);
const theme = useTheme()

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.global.name.value = 'customDarkTheme'
  }
  else {
    theme.global.name.value = 'customLightTheme'
  }

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
        <header class="surface">
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
  background-color: rgb(var(--v-theme-surfacelowest));
  color: rgba(var(--v-theme-onbackground), 0.9)
}

header,.divider {
  border-bottom: 1px solid rgba(var(--v-theme-outline), 0.9);
}

.primary{
  background-color: rgb(var(--v-theme-primary));
  color: rgba(var(--v-theme-onprimary), 0.9)
}

.primarycontainer{
  background-color: rgb(var(--v-theme-primarycontainer));
  color: rgba(var(--v-theme-onprimarycontainer), 0.9)
}

.secondary{
  background-color: rgb(var(--v-theme-secondary));
  color: rgba(var(--v-theme-onsecondary), 0.9)
}

.surfacelowest {
  background-color: rgb(var(--v-theme-surfacelowest));
  color: rgba(var(--v-theme-onsurface), 0.9)
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

.tertiary {
  background-color: rgb(var(--v-theme-tertiary));
  color: rgba(var(--v-theme-ontertiary), 0.9)
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

/* styles for markdown(cannot scoped so I put them here) */
.markdown h1{
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
  letter-spacing: 0.00735em;
}

</style>