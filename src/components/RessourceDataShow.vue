<template>
  <h3>Resource data :</h3>
  <h4>Title : {{ bookStore.book.title }}</h4>
  <h4>Author : {{ bookStore.book.author }}</h4>
  <h4>Genre : {{ bookStore.book.genre }}</h4>
  <h4>Published date :{{ bookStore.book.created_at }}</h4>
  <h4>Total number of pages :{{ bookStore.book.totalPages }}</h4>
</template>

<script lang="ts" setup>

import {useBookStore} from "@/stores/Book";

const bookStore = useBookStore();

</script>