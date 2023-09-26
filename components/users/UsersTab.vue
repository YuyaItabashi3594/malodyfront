<script setup>
const props = defineProps({
  tabName: {
    type: String,
    required: true
  },
  currentTab: {
    type: String,
    required: true
  }
})

const isTabSelected = computed(() => props.tabName === props.currentTab)
const isTabHovered = ref(false)

</script>

<template>
  <div class="flex-row" @mouseover="isTabHovered = true" @mouseleave="isTabHovered = false" @click="$emit('clicked')">
    <p class="rounded-lg text-center">{{ $t(tabName) }}</p>
    <div :class="[isTabSelected || isTabHovered  ?'border-b-4 opacity-50 mx-auto rounded-xl' : '']"></div>
  </div>
</template>