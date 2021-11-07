<script setup>
import { ref } from 'vue'

defineProps({
    circumference: Number,
    progress: Number
})


</script>

<template>
 <div  class="mt-16 transform scale-150 relative inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5">
      <svg class="w-20 h-20">
        <circle
          class="text-gray-50"
          stroke-width="3"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          class="text-green-500"
          stroke-width="3"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - progress / 100 * circumference"
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span class="absolute text-xs text-green-600 font-medium">{{ progress }}%</span>
    </div>
</template>
