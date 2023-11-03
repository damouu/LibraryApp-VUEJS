<template>
  <div class="input-group ps-1">
    <i class="input-group-text bi bi-search "></i>
    <input id="search-input" v-model="input" aria-describedby="basic-addon1" aria-label="Username" class="form-control"
           placeholder="Search"
           type="text" @input="toBeCall()">
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

let input = ref();

const emit = defineEmits<{ (e: 'inputEmit', userInput: String) }>()

function toBeCall() {
  emit('inputEmit', input.value);
}

</script>