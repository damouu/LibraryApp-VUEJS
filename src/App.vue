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
  </header>

  <RouterView/>
</template>


<script lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {defineComponent, ref} from "vue";
import JobList from "@/components/JobList.vue";
import Job from "@/types/Job"
import type OrderTerm from "@/types/OrderTerm";

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    RouterLink,
    RouterView,
    JobList,
  }, setup() {
    const jobs = ref<Job[]>([
      {id: 1, name: "dede", email: "dedede", password: "dede"}
    ])
    const order = ref<OrderTerm>('name')
    // const handlerClick = (term: OrderTerm) => {
    //   order.value = term
    // }  todo maniere d'ecire degeulasse a la javascript de mes couilles


    // todo maniere decrire propre mashallah clean
    function handlerClick(term: OrderTerm) {
      order.value = term
    }

    return {jobs, handlerClick, order}
  }
});

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
