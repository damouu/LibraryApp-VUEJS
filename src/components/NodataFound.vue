<template>
  <h1 class="green">{{ props.dede }}</h1>
  <h3>
    No data was found, maybe the API is down???
    {{ props.dede }}
    <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
  </h3>
</template>

<script setup lang="ts">
const props = defineProps({
  dede: {type: String, required: true},
})
</script>