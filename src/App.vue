<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>
    <button class="btn btn-warning" @click="handlerClick('name')">name</button>
    <button class="btn btn-warning" @click="handlerClick('email')">email</button>
    <button class="btn btn-warning" @click="handlerClick('password')">password</button>
    <div class="wrapper">
      <JobList :jobs="jobs" :order="order"/>
      <HelloWorld msg="You did it!"/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <button class="btn btn-dark" @click="httpGetPokemon()">axios</button>
  </header>

  <RouterView/>
</template>


<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {inject, reactive, ref} from "vue";
import JobList from "@/components/JobList.vue";
import Job from "@/types/Job"
import type OrderTerm from "@/types/OrderTerm";

const axios = inject('axios');


const jobs = reactive<Job[]>([
  {id: 1, name: "dede_name", email: "dede_email", password: "dede_password"}
]);

const order = ref<OrderTerm>('name');

function handlerClick(term: OrderTerm) {
  order.value = term
}

function httpGetPokemon() {
  axios.get('/pokemon/blastoise');
}

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
