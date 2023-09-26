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

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'customLightTheme' : 'customDarkTheme'
  console.log(theme.global.current.value)
}

</script>

<template>
  <div class="flex items-center px-4 w-full">
    <div class="flex w-3/4">
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
      <ClientOnly>
        <font-awesome-icon class="text text-xl my-auto ml-4" :icon="['fab', 'discord']" />
      </ClientOnly>
      <div class="w-40 relative">
        <div class="absolute -top-4 left-6 w-40">
          <v-text-field :label="$t('search')" variant="underlined"></v-text-field>
        </div>
      </div>
    </div>
    <div class="flex w-1/4 justify-end">
      <select class="rounded-lg w-20" v-model="locale">
        <option disabled value="">{{ $t('selectLanguage') }}</option>
        <option value="en">English</option>
        <option value="jp">日本語</option>
      </select>
      <div class="my-auto mr-6">
        <font-awesome-icon @click="toggleTheme" :icon="['fas', theme.global.current.value.dark ? 'moon' : 'sun']"
          size="xl" />
      </div>
      <OnClickOutside @trigger="isUserMenuVisible = false">
        <div class="relative">
          <img @click="isUserMenuVisible = !isUserMenuVisible" src="/roadrunner.jpg"
            class="object-fill h-14 w-14 my-1 rounded-full transition duration-200 hover:opacity-60">
          <div v-if="isUserMenuVisible" class="absolute mt-2 z-10 surface rounded-lg">
            <NavbarUserMenu />
          </div>
        </div>
      </OnClickOutside>
    </div>
  </div>
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