<template>
  <div class="row row-cols-1 row-cols-md-5 g-4 mb-5" ref="scrollComponent">
    <div v-for="book in bookList">
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="../assets/pokemon-pokemon-red-and-blue-wallpaper-preview.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-primary">Title: {{ book.title }} 📕</h5>
            <p class="card-text">{{ book.genre }}, {{ book.publisher }}, {{ book.totalPages }}, </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {inject, onBeforeMount, onMounted, onUnmounted, reactive, ref} from "vue";
import {Book} from "@/types/Book";

const axios = inject('axios');
const pageNumber: Number = ref(0);
const sizeNumber: Number = ref(20);
const scrollComponent = ref(null);
const bookList: Array<Book> = reactive<Book[]>([]);

function fetchMoreBooks(): void {
  axios.get('/book' + '?page=' + (pageNumber.value += 1) + '&size=' + sizeNumber.value).then(response => {
    response.data.forEach(book => {
      bookList.push(new Book(book.uuid, book.totalPages, book.title, book.publisher, book.genre, book.created_at, book.author));
    })
  })
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

function handleScroll(): void {
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    fetchMoreBooks();
  }
}

onBeforeMount(async () => {
  try {
    const response = await axios.get('/book' + '?page=' + pageNumber.value + '&size=' + sizeNumber.value);
    response.data.forEach(book => {
      bookList.push(new Book(book.uuid, book.totalPages, book.title, book.publisher, book.genre, book.created_at, book.author));
    });
  } catch (error) {
    console.log(error)
  }
});

</script>