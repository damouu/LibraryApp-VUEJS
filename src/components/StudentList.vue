<template>
  <div v-if="studentList.length !=0">
    <div>
      <section class="row  mb-4">
        <ArticleSection/>
      </section>
    </div>
    <div class="row">
      <section class="col-12">
        <TableList :student-list="studentList" :page="pageNumber"/>
      </section>
    </div>
    <div class="row">
      <section class="mt-3">
        <PaginationTable @pageNumberEmit="pageEmitReceived"/>
      </section>
    </div>
  </div>
  <div v-else>
    <NodataFound dede="LOOOO"/>
  </div>
</template>


<script setup lang="ts">
import {inject, onBeforeMount, reactive, ref} from "vue";
import TableList from "@/components/TableList.vue";
import {Student} from "@/types/Student";
import PaginationTable from "@/components/PaginationTable.vue";
import NodataFound from "@/components/NodataFound.vue";
import ArticleSection from "@/components/ArticleSection.vue";

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
