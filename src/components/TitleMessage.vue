<template>
  <H2 class="text-warning text-center">{{ props.title }}</H2>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {type: String, required: true},
});
</script>