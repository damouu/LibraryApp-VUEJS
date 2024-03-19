<template>
  <h3 class="text-primary">User data </h3>
  <br>
  <RouterLink :to="{ name: 'UserView', params: { userUUID: bookStore.book.studentIdCard }}" aria-current="page"
              class="nav-link active">

    <h5 class="text-success">{{ bookStore.book.studentIdCard }}</h5>
  </RouterLink>
</template>

<script lang="ts" setup>
import {useBookStore} from "@/stores/Book";

const bookStore = useBookStore();

</script>