<script setup>
const props = defineProps({
  mode: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="flex">
    <img class="object-fill h-16 w-16" :src="`/${mode}.png`" />
    <p class="text-xl ml-2 mt-1">#810</p>
  </div>
</template>