<script setup>
import { OnClickOutside } from '@vueuse/components'
const { locale } = useI18n()
const isSearchVisible = ref(false)
const isUserMenuVisible = ref(false)
const route = useRoute()

watch(() => route, () => {
  isUserMenuVisible.value = false
})

</script>

<template>
  <div class="flex items-center px-10 justify-center bg-slate-900">
    <div class="w-full flex">
      <NuxtLink :to="'/'">
        <p class="flex"><img class="object-scale-down h-8 mt-0.5" src="/icon-64.png">
          <span class="text text-center py-1 px-2">Malody</span>
        </p>
      </NuxtLink>
      <div class="flex text ml-8 gap-2">
        <NavbarContent :text="'player'" :url="'/player'" />
        <NavbarContent :text="'chart'" :url="'/charts'" />
        <NavbarContent :text="'skin'" :url="'/skin'" />
        <NavbarContent :text="'store'" :url="'/store'" />
        <NavbarContent :text="'forum'" :url="'/forum'" />
      </div>
      <ClientOnly><font-awesome-icon class="text text-xl my-auto ml-4" :icon="['fab', 'discord']" />
        <font-awesome-icon @click="isSearchVisible = !isSearchVisible"
          class="text text-xl p-2 ml-4 my-auto cursor-pointer" :icon="['fas', 'magnifying-glass']" />
      </ClientOnly>
      <select class="ml-4 rounded-lg pl-3 pr-2" v-model="locale">
        <option disabled value="">{{ $t('selectLanguage') }}</option>
        <option value="en">English</option>
        <option value="jp">日本語</option>
      </select>
    </div>
    <OnClickOutside @trigger="isUserMenuVisible = false">
      <div class="relative">
        <img @click="isUserMenuVisible = !isUserMenuVisible" src="/roadrunner.jpg"
          class="object-fill h-14 w-14 my-1 rounded-full transition duration-200 hover:opacity-60">
        <div v-if="isUserMenuVisible" class="text absolute mt-2 z-10">
          <NavbarUserMenu />
        </div>
      </div>
    </OnClickOutside>
  </div>
  <Transition name="slide-search">
    <div v-if="isSearchVisible" class="w-full">
      <div class="flex items-center justify-center py-2 bg-slate-900/75">
        <div class="w-1/2 flex h-10">
          <input class="w-full rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="input here" />
          <button
            class="px-8 rounded-r-lg bg-slate-400 hover:bg-slate-300 text-slate-800 font-bold uppercase border-slate-500 border-t border-b border-r">Search</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-search-enter-active,
.slide-search-leave-active {
  transform-origin: top;
  transition: transform .3s ease-in-out;
}

.slide-search-enter-from,
.slide-search-leave-to {
  transform: scaleY(0);
}
</style>