<template>
  <h3>User data :</h3>
  <RouterLink :to="{ name: 'book', params: { bookUUID: studentStore.student.uuid}}" aria-current="page"
              class="nav-link active">
    <h4>UUID : {{ studentStore.student.uuid }}</h4>
  </RouterLink>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import {useStudentStore} from "@/stores/Student";
import {useBookStore} from "@/stores/Book";

const studentStore = useStudentStore();
const bookStore = useBookStore();

onMounted(() => {
  studentStore.getStudentIdCard(bookStore.book.studentIdCard);

})
</script>