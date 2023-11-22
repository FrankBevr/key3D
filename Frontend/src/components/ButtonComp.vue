<script setup lang="ts">
const { label } = defineProps({
  label: {
    type: String,
    required: true
  }
});
</script> 
<template>
  <button :style="{ color: 'red' }">{{ label || 'No props passed yet' }}</button>
</template>
