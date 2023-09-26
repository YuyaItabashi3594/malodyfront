<script setup>
</script>
<template>
  <div class="rounded-t p-2 flex-row object-center justify-center w-32">
    <p class="text-center text-lg">DPkaiden</p>
  </div>
  <v-divider></v-divider>
  <div class="rounded-b p-4">
    <NuxtLink to="/users/1">
      <p class="user-menu-text">{{ $t('profile') }}</p>
    </NuxtLink>
    <p class="user-menu-text">{{ $t('messages') }}</p>
    <v-divider class="mt-2"></v-divider>
    <p class="mt-2 user-menu-text text-red-700">{{ $t('logout') }}</p>
  </div>
</template>

<style scoped>
.user-menu-text {
  @apply transition duration-100 py-1
}
</style>