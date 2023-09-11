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
        <ul ref="peep" class="pagination justify-content-center pagination-lg">
          <a class="page-link" :class="{active: activeList[0].value, disabled: isDisabled}" href="#"
             aria-label="Previous"
             @click="previousButtonClick(pagesNumber[0]-3)">
            <span aria-hidden="true">&laquo;</span>
          </a>
          <li class="page-item"><a class='page-link ' :class="{active: activeList[0].value}"
                                   @click="nextButtonClick(pagesNumber[0],0); toggleClass(0);">{{
              pagesNumber[0]
            }} </a>
          </li>
          <li class="page-item"><a class='page-link' :class="{active: activeList[1].value}"
                                   @click=" nextButtonClick(pagesNumber[1],1); toggleClass(1);">{{
              pagesNumber[1]
            }} </a>
          </li>
          <li class="page-item"><a class='page-link' :class="{active: activeList[2].value}"
                                   @click="nextButtonClick(pagesNumber[2],2); toggleClass(2);">{{
              pagesNumber[2]
            }} </a>
          </li>
          <a class="page-link" href="#" aria-label="Next" @click="nextButtonClick(1+pagesNumber[2])">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script setup lang="ts">
import {inject, onMounted, PropType, reactive, ref} from "vue";
import type OrderTerm from "@/types/OrderTerm";

const axios = inject('axios');
const studentsList = reactive<Student[]>([]);
const pageNumber = ref(0);
const sizeNumber = ref(5);
let pagesNumber: Number[] = [0, 1, 2];
let isActive0, isActive1, isActive2;
const isDisabled = ref(true)

const activeList: Dictionary<boolean> = {
  0: isActive0 = ref(true),
  1: isActive1 = ref(false),
  2: isActive2 = ref(false),
};

function toggleClass(pageClickedToToggle) {
  for (const key in activeList) {
    if (activeList[key].value == true)
      var indexOfTrue = key;
  }
  activeList[indexOfTrue].value = !activeList[indexOfTrue].value
  activeList[pageClickedToToggle].value = !activeList[pageClickedToToggle].value
}

function previousButtonClick(page: Number) {
  if (page < 0) {
    alert('trying to go beyond 0 value')
  } else {
    pagesNumber[2] = pagesNumber[0] - 1;
    pagesNumber[1] = pagesNumber[2] - 1;
    pagesNumber[0] = pagesNumber[1] - 1;
    pageNumber.value--;
    axios.get('/student?page=' + page + '&size=' + sizeNumber.value).then(response => {
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
}

function nextButtonClick(page: Number, clickedPage: Number) {
  for (const key in activeList) {
    if (activeList[key].value == true)
      var indexOfTrue = key;
  }
  if (indexOfTrue != clickedPage) {
    if (page > pagesNumber[2]) {
      pagesNumber[0] = pagesNumber[2] + 1;
      pagesNumber[1] = pagesNumber[0] + 1;
      pagesNumber[2] = pagesNumber[0] + 2;
      pageNumber.value++;
    }
    activeList[indexOfTrue].value = false
    activeList[0].value = true
    axios.get('/student?page=' + page + '&size=' + sizeNumber.value).then(response => {
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
}

onMounted(() => {
  axios.get('/student?page=' + pageNumber.value + '&size=' + sizeNumber.value).then(response => {
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
