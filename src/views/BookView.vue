<template>
  <div class="row mt-5">
    <section class="mb-4 col-3 offset-1">
      <article>
        <ResourceArt/>
      </article>
    </section>
    <section class="col-6 offset-2">
      <article>
        <ResourceDataShow/>
      </article>
      <article>
        <div v-if="bookStore.book.studentIdCard">
          <div class="col-6 mt-5">
            <UserDataShow/>
          </div>
        </div>
        <div v-else>
          <BorrowBookButton class="col-2 mt-5"/>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup>
import ResourceArt from "@/components/RessourceArt.vue";
import ResourceDataShow from "@/components/RessourceDataShow.vue";
import UserDataShow from "@/components/UserDataShow.vue";
import BorrowBookButton from "@/components/BorrowBookButton.vue";
import {useBookStore} from "@/stores/Book";
import {onBeforeMount} from "vue";
import {useRoute} from "vue-router";

const bookStore = useBookStore();

onBeforeMount(() => {
  bookStore.getBookUUID(useRoute().params.bookUUID);

})

</script>