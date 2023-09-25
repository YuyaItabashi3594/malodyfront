<script setup>
import { OnClickOutside } from '@vueuse/components'
import { useTheme } from 'vuetify'

const { locale } = useI18n()
const isSearchVisible = ref(false)
const isUserMenuVisible = ref(false)
const route = useRoute()
const theme = useTheme()

watch(() => route, () => {
  isUserMenuVisible.value = false
})

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'customLightTheme' : 'customDarkTheme'
  console.log(theme.global.current.value)
}

</script>

<template>
  <div class="flex items-center px-6 justify-center">
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
      <select class="ml-4 rounded-lg pl-3 pr-2 text" v-model="locale">
        <option disabled value="">{{ $t('selectLanguage') }}</option>
        <option value="en">English</option>
        <option value="jp">日本語</option>
      </select>
    </div>
    <div class="mr-10">
      <font-awesome-icon @click="toggleTheme" :icon="['fas',theme.global.current.value.dark ? 'moon': 'sun' ]" size="xl" />
    </div>
    <OnClickOutside @trigger="isUserMenuVisible = false">
      <div class="relative">
        <img @click="isUserMenuVisible = !isUserMenuVisible" src="/roadrunner.jpg"
          class="object-fill h-14 w-14 my-1 rounded-full transition duration-200 hover:opacity-60">
        <div v-if="isUserMenuVisible" class="absolute mt-2 z-10 tertiarycontainer rounded-lg">
          <NavbarUserMenu />
        </div>
      </div>
    </OnClickOutside>
  </div>
  <Transition name="slide-search">
    <div v-if="isSearchVisible" class="w-full">
      
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