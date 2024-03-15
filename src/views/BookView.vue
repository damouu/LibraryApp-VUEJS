<template>
  <div class="row gy-4">
    <TitleMessage/>
    <section class="mb-4 col-4">
      <ResourceArt/>
    </section>
    <section class="col-4 offset-2">
      <ResourceDataShow/>
    </section>
    <div v-if="bookStore.book.studentIdCard">
      <section class="col-7 offset-6">
        <UserDataShow/>
      </section>
    </div>
    <div v-else>
      <section class="col-7 offset-6">
        <BorrowBookButton/>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TitleMessage from "@/components/TitleMessage.vue";
import ResourceArt from "@/components/RessourceArt.vue";
import ResourceDataShow from "@/components/RessourceDataShow.vue";
import UserDataShow from "@/components/UserDataShow.vue";
import BorrowBookButton from "@/components/BorrowBookButton.vue";
import {useBookStore} from "@/stores/Book";

const bookStore = useBookStore();

</script>