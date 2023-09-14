<script setup>
</script>
<template>
  <div class="rounded-t bg-slate-900 p-2 flex-row object-center justify-center w-32">
    <p class="text-center text-lg">DPkaiden</p>
  </div>
  <div class="rounded-b bg-slate-900 p-4 border-t border-slate-700">
    <NuxtLink to="/users/1">
      <p>{{ $t('profile') }}</p>
    </NuxtLink>
    <p>{{ $t('messages') }}</p>
    <p class="mt-6 border-t pt-1">{{ $t('logout') }}</p>
  </div>
</template>