<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <p>{{ user.at(0) }}</p>
      <HelloWorld msg="You did it!"/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <!--      <div class="col-12">-->
      <!--        <p class="fs-2">{{ myNm }}</p>-->
      <!--        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="my">-->
      <!--        <button type="button" @click="changeName(myName)" class="btn btn-warning">manger la chatte</button>-->
      <!--      </div>-->

      <!--      <div class="col-12">-->
      <!--        <p class="fs-2">Message is : {{ message }}</p>-->
      <!--        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="message">-->
      <!--      </div>-->

    </div>
  </header>

  <RouterView/>
</template>


<script lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import User from "@/types/User";
import {defineComponent, ref} from "vue";
import JobList from "@/components/JobList.vue";

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    RouterLink,
    RouterView,
    JobList,
  }, setup() {
    const user = ref<User[]>([
      {id: 1, name: "dede", email: "dedede", password: "dede"}
    ])
    return {user}
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
