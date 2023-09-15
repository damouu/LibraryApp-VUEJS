<template>
  <section class="col-12" v-if="studentList.length !=0">
    <TableList :student-list="studentList" :page="pageNumber"/>
    <PaginationTable @pageNumberEmit="pageEmitReceived"/>
  </section>
  <section v-else>
    <NodataFound dede="LOOOO"/>
  </section>
</template>


<script setup lang="ts">
import {inject, onBeforeMount, reactive, ref} from "vue";
import TableList from "@/components/TableList.vue";
import {Student} from "@/types/Student";
import PaginationTable from "@/components/PaginationTable.vue";
import NodataFound from "@/components/NodataFound.vue";

const axios = inject('axios');
const pageNumber = ref(0);
const sizeNumber = ref(10);
const studentList: Array<Student> = reactive<Student[]>([]);

const props = defineProps({
  japanese: {type: String, required: true},
  english: {type: String, required: true},
  page: {type: Number, required: false},
})

function pageEmitReceived(page): void {
  pageNumber.value = page;
}

onBeforeMount(async () => {
  try {
    const response = await axios.get('/' + props.english + '?page=' + pageNumber.value + '&size=' + sizeNumber.value);
    response.data.forEach(student => {
      studentList.push(new Student(student.uuid, student.name, student.email, student.dob));
    })
  } catch (error) {
    console.log(error)
  }
})

</script>
