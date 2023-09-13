<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light position-fixed fixed-top border border-danger">
    <ButtonCheck/>
    <a class="navbar-brand">VueApp</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active" aria-current="page">ホームページ</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link active" aria-current="page">お知らせ</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <RouterLink to="/student" class="nav-link active" aria-current="page">学生のページ</RouterLink>
        </li>
      </ul>
      <FormSearch/>
    </div>
  </nav>
</template>
<script setup lang="ts">
import ButtonCheck from "@/components/ButtonCheck.vue";
import FormSearch from "@/components/FormSearch.vue";
</script>