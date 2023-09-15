<template>
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
    <tr v-for="student in studentList">
      <th scope="row">{{ student.uuid }}</th>
      <td>{{ student.name }}</td>
      <td>{{ student.email }}</td>
      <td>{{ student.dob }}</td>
      <td>
        <button class="btn btn-primary rounded  rounded-circle border border-primary"><i
            class="bi bi-person-circle"></i></button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {inject, onBeforeMount, reactive, ref, watch} from "vue";
import {Student} from "@/types/Student";

const axios = inject('axios');
const sizeNumber = ref(10);
let studentList: Array<Student> = reactive<Student[]>([]);
const props = defineProps({
  page: {type: Number, required: true},
  studentList: {type: Array<Student>, required: false},
})

watch(() => props.page, (first, second) => {
  studentsAxios();
});

function studentsAxios() {
  try {
    axios.get('/student' + '?page=' + props.page + '&size=' + sizeNumber.value).then(response => {
      studentList.length = 0;
      response.data.forEach(student => {
        let newStudent = new Student(student.uuid, student.name, student.email, student.dob);
        studentList.push(newStudent);
      })
    })
  } catch (error) {
    console.log(error)
  }
}

onBeforeMount(() => {
  studentList = props.studentList;
})

</script>