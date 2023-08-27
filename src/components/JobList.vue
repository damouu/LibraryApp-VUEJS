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


<script lang="ts">
import {defineComponent, PropType} from "vue";
import type OrderTerm from "@/types/OrderTerm";

function subscribeUser() {
  console.log("form submitted! do something");
}
export default defineComponent({
  props: {
    jobs: {
      require: true,
      type: Array as PropType<Job[]>
    },
    order: {
      require: true,
      type: String as PropType<OrderTerm>
    }
  }
});
</script>
