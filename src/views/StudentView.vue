<template>
  <div class="row">
    <section class="mb-4">
      <TitleMessage title="Student section "/>
    </section>
  </div>
  <div class="row">
    <main class="col-12">
      <TableList :page="pageNumber"/>
    </main>
  </div>
  <div class="row">
    <section class="mt-4">
      <PaginationTable @pageNumberEmit="pageEmitReceived"/>
    </section>
  </div>
</template>

<script setup lang="ts">
import TitleMessage from "@/components/TitleMessage.vue";
import TableList from "@/components/TableList.vue";
import PaginationTable from "@/components/PaginationTable.vue";
import {ref} from "vue";

const pageNumber: Number = ref(0);

function pageEmitReceived(page): void {
  pageNumber.value = page;
}

</script>