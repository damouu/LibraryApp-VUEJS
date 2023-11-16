<template>
  <section class="row">
    <div class="offset-4 col-4 mb-5 mt-5">
      <TitleMessage title="Books gallery"/>
      <div>
        <Search @inputEmit="pageEmitReceived"/>
      </div>
    </div>
  </section>
  <section class="row">
    <main class="ms-4">
      <CardGrid :input="inputReceived"/>
    </main>
  </section>
</template>


<script setup lang="ts">
import CardGrid from "@/components/CardGrid.vue";
import TitleMessage from "@/components/TitleMessage.vue";
import Search from "@/components/SearchBar.vue";
import {ref} from "vue";

let inputReceived: String = ref(null);

function pageEmitReceived(inputEmit): void {
  inputReceived.value = inputEmit;
}

</script>