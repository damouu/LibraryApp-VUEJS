<template>
  <div v-if="studentStore.student && useRoute().params.userUUID">
    <div class="row">
      <section class="mb-4">
        <UserData/>
      </section>
    </div>
  </div>
  <div v-else>
    <p>not allowed</p>
  </div>
</template>

<script lang="ts" setup>
import UserData from "@/components/UserData.vue";
import {useStudentStore} from "@/stores/Student";
import {onBeforeMount} from "vue";
import {useRoute} from "vue-router";

const studentStore = useStudentStore();

onBeforeMount(() => {
  studentStore.getStudentIdCard(useRoute().params.userUUID);

})

</script>