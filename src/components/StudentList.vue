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
  <div class="row column-gap-1">
    <div class="col-5 offset-3">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center pagination-lg">
          <li class="page-item"><a class="page-link" href="#" @click="previousButtonClick">Previous</a></li>
          <li class="page-item"><a class="page-link active" href="#">{{ pageNumber }} </a></li>
          <li class="page-item"><a class="page-link" href="#">{{ pageNumber + 1 }} </a></li>
          <li class="page-item"><a class="page-link" href="#">{{ pageNumber + 2 }} </a></li>
          <li class="page-item"><a class="page-link" href="#" @click="nextButtonClick">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script setup lang="ts">
import {inject, onMounted, PropType, reactive} from "vue";
import type OrderTerm from "@/types/OrderTerm";

const axios = inject('axios');

const studentsList = reactive<Student[]>([]);

let pageNumber: Number = 1;
let sizeNumber: Number = 5;

function previousButtonClick() {
  if (sizeNumber != 5) {
    sizeNumber--;
    if (pageNumber > 1) {
      pageNumber--;
    } else {
      sizeNumber = 5;
      if (pageNumber >= 1) {
        pageNumber--;
      } else {
        pageNumber = 0;
      }
    }
  } else {
    pageNumber--;
  }
  axios.get('/student?page=' + pageNumber.valueOf() + '&size=' + sizeNumber).then(response => {
    let students = response.data;
    studentsList.length = 0;
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
}

function searchPageSize(pageSize: Number, sizeNumber: Number) {
  axios.get('/student?page=' + pageNumber + '&size=' + sizeNumber).then(response => {
    let students = response.data;
    studentsList.length = 0;
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
}

function nextButtonClick() {
  if (sizeNumber != 5) {
    sizeNumber++;
  } else {
    pageNumber++;
  }
  axios.get('/student?page=' + pageNumber + '&size=' + sizeNumber).then(response => {
    let students = response.data;
    studentsList.length = 0;
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
}

onMounted(() => {
  axios.get('/student?page=' + pageNumber + '&size=' + sizeNumber).then(response => {
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
