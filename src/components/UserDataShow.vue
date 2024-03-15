<template>
  <h3>User data :</h3>
  <RouterLink :to="{ name: 'UserView', params: { userUUID: bookStore.book.studentIdCard }}" aria-current="page"
              class="nav-link active">
    <h4>UUID : {{ bookStore.book.studentIdCard }}</h4>
  </RouterLink>
</template>

<script lang="ts" setup>
import {useBookStore} from "@/stores/Book";

const bookStore = useBookStore();

</script>