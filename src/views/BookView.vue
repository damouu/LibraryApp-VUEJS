<template>
  <div class="row gy-4">
    <TitleMessage/>
    <section class="mb-4 col-4">
      <ResourceArt/>
    </section>
    <section class="col-4 offset-2">
      <ResourceDataShow/>
    </section>
    <section class="col-7 offset-6">
      <UserDataShow/>
    </section>
  </div>
</template>

<script lang="ts" setup>
import TitleMessage from "@/components/TitleMessage.vue";
import ResourceArt from "@/components/RessourceArt.vue";
import ResourceDataShow from "@/components/RessourceDataShow.vue";
import UserDataShow from "@/components/UserDataShow.vue";
</script>