<template>
  <div class="d-flex mb-3 offset-5">
    <h5 class="text-danger">No result found with the word:</h5>
    <h4 class="text-danger bg-warning ml-2"> {{ props.word }}</h4>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  word: {type: String, required: false},
})
</script>