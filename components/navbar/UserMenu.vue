<script setup>
</script>
<template>
  <div class="rounded-t bg-slate-900 p-2 flex-row object-center justify-center w-32">
    <p class="text-center text-lg">DPkaiden</p>
  </div>
  <div class="rounded-b bg-slate-900 p-4 border-t border-slate-700">
    <NuxtLink to="/users/1">
      <p class="user-menu-text">{{ $t('profile') }}</p>
    </NuxtLink>
    <p class="user-menu-text">{{ $t('messages') }}</p>
    <p class="mt-6 border-t pt-1 user-menu-text">{{ $t('logout') }}</p>
  </div>
</template>

<style scoped>
.user-menu-text {
  @apply hover:text-slate-300 transition duration-100
}
</style>