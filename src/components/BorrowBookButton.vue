<template>
  <router-link v-slot="{ navigate }" custom to="/">
    <button class="btn rounded ms-2 me-2" role="link" @click="navigate">
      <i class="bi bi-chat-quote h4">Borrow this book</i>
    </button>
  </router-link>
</template>
<script lang="ts" setup>
</script>