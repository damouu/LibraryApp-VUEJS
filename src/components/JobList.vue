<template>
  <div class="job-list">
    <p>order by {{ order }}</p>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <h2>{{ job.id }}, {{ job.name }}, {{ job.email }}, {{ job.password }}, </h2>
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import {PropType} from "vue";
import type OrderTerm from "@/types/OrderTerm";


defineProps({
  jobs: {
    require: true,
    type: Array as PropType<Job[]>
  },
  order: {
    require: true,
    type: String as PropType<OrderTerm>
  }
});
</script>
