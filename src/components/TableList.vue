<template>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">uuid</th>
      <th scope="col">名前</th>
      <th scope="col">メール</th>
      <th scope="col">生年月日</th>
      <th scope="col">アイコン</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="student in studentList">
      <th scope="row">{{ student.uuid }}</th>
      <td>{{ student.name }}</td>
      <td>{{ student.email }}</td>
      <td> {{ student.dob }}</td>
      <td>
        <div v-if="student.studentIdCard">
          <router-link :to="{name: 'printData', params: {uuid: student.studentIdCard}}">
            <button class="btn btn-primary rounded  rounded-circle border border-primary">
              <i class="bi bi-person-circle"></i></button>
          </router-link>
        </div>
        <div v-else>
          <button class="rounded  rounded-circle border border-danger bg-danger">
            <i class="bi bi-ban"></i></button>
        </div>
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
});

watch(() => props.page, (first, second) => {
  studentsAxios();
});

function studentsAxios() {
  try {
    axios.get('/student' + '?page=' + props.page + '&size=' + sizeNumber.value).then(response => {
      studentList.length = 0;
      response.data.forEach(student => {
        let cardUuid;
        if (student["studentIdCard"] != null) {
          cardUuid = student.studentIdCard.uuid;
        } else {
          cardUuid = null;
        }
        let newStudent = new Student(student.uuid, student.name, student.email, student.dob, cardUuid);
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