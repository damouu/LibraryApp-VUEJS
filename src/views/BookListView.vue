<template>
  <section class="row">
    <div class="offset-4 col-4 mb-1 mt-5">
      <TitleMessage title="Books gallery"/>
    </div>
    <div class="offset-4 col-4 mb-5">
      <Search @inputEmit="pageEmitReceived"/>
    </div>
    <div class="col-1 offset-1">
      <QueryParamsButton/>
    </div>
  </section>
  <div v-show="booksNotFound">
    <section class="row">
      <main class="ms-4">
        <NodataFound :word="inputReceived"/>
      </main>
    </section>
  </div>
  <div v-show="!booksNotFound">
    <section class="row">
      <main class="ms-4">
        <CardGrid :input="inputReceived" @booksNotFound="bookEmitReceived"/>
      </main>
    </section>
  </div>
</template>


<script lang="ts" setup>
import CardGrid from "@/components/CardGrid.vue";
import TitleMessage from "@/components/TitleMessage.vue";
import Search from "@/components/SearchBar.vue";
import NodataFound from "@/components/NodataFound.vue";
import {ref} from "vue";
import QueryParamsButton from "@/components/FilterButton.vue";

let inputReceived: String = ref(null);
let booksNotFound: Boolean = ref(null);

function pageEmitReceived(inputEmit): void {
  inputReceived.value = inputEmit;
}

function bookEmitReceived(bookEmit): void {
  booksNotFound.value = bookEmit;
}

</script>