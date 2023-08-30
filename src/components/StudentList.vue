<template>
  <h2>学生の情報に関しては以下に表示されております。</h2>
  <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">uuid</th>
      <th scope="col">名前</th>
      <th scope="col">メール</th>
      <th scope="col">生年月日</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="student in studentsList">
      <th scope="row">{{ student.uuid }}</th>
      <td>{{ student.name }}</td>
      <td>{{ student.email }}</td>
      <td>{{ student.dob }}</td>
    </tr>
    </tbody>
  </table>
</template>


<script setup lang="ts">
import {inject, onMounted, PropType, reactive} from "vue";
import type OrderTerm from "@/types/OrderTerm";

const axios = inject('axios');

const studentsList = reactive<Student[]>([]);

onMounted(() => {
  axios.get('/student/').then(response => {
    let students = response.data;
    students.forEach(student => {
      const newStudent = <Student>({
        uuid: student.uuid,
        name: student.name,
        email: student.email,
        dob: student.dob,
      })
      studentsList.push(newStudent)
    })
  });
});


defineProps({
  students: {
    require: false,
    type: Array as PropType<Student[]>
  },
  order: {
    require: false,
    type: String as PropType<OrderTerm>
  }
});
</script>
