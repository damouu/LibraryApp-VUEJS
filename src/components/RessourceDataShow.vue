<template xmlns="http://www.w3.org/1999/html">
  <h3 class="text-primary">About this Book </h3>
  <br>
  <h4>Title : {{ bookStore.book.title }}</h4>
  <br>
  <h4>Author : {{ bookStore.book.author }}</h4>
  <br>
  <h4>Genre : {{ bookStore.book.genre }}</h4>
  <br>
  <h4>Publisher : {{ bookStore.book.publisher }}</h4>
  <br>
  <h4>Published date : {{ bookStore.book.created_at }}</h4>
  <br>
  <h4>Total number of pages : {{ bookStore.book.totalPages }}</h4>
</template>

<script lang="ts" setup>

import {useBookStore} from "@/stores/Book";

const bookStore = useBookStore();

</script>