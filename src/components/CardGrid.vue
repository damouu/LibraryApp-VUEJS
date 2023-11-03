<template>
  <div class="d-flex mb-3">
    <div class="d-inline-block">
      <p>Number of books found: &nbsp; </p>
    </div>
    <div class="d-inline-block">
      <h5 class="text-primary"> {{ booksCount }} </h5>
    </div>
    <div>
      <span v-if="booksCount == 0" class="text-danger">No result found with title: {{ props.input }}</span>
    </div>
  </div>
  <div ref="carousel">
    <div v-if="!bookStore.book.uuid || !props.input">
      <div ref="scrollComponent" class="row row-cols-1 row-cols-md-5 g-4 mb-5">
        <div v-for="book in bookStore.bookList" :key="book.uuid">
          <div class="col">
            <div class="card" style="width: 18rem;">
              <img alt="..." class="card-img-top" src="../assets/pokemon-pokemon-red-and-blue-wallpaper-preview.jpg">
              <div class="card-body">
                <h5 class="card-title text-primary"> {{ book.title }} 📕</h5>
                <p class="card-text">{{ book.genre }}, {{ book.publisher }}, {{ book.totalPages }}, </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div ref="scrollComponent" class="row row-cols-1 row-cols-md-5 g-4 mb-5">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img alt="..." class="card-img-top" src="../assets/pokemon-pokemon-red-and-blue-wallpaper-preview.jpg">
            <div class="card-body">
              <h5 class="card-title text-primary"> {{ bookStore.book.title }} 📕</h5>
              <p class="card-text">{{ bookStore.book.genre }}, {{ bookStore.book.publisher }},
                {{ bookStore.book.totalPages }}, </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, onUpdated, ref, watch} from "vue";
import {useBookStore} from "@/stores/Book";
import {data, errors} from "msw";

const bookStore = useBookStore();
const scrollComponent = ref(null);
const carousel = ref<HTMLDivElement>(null);
const booksCount = ref<number>(null)
const props = defineProps({input: String,})
const wordUpperCase = ref<string | null>(null);
bookStore.getBooks(1, 20);
const bookListCopy = computed(() => [...bookStore.bookList])

function searchBook() {
  if (props.input[8] == '-' && props.input[13] == '-' && props.input[18] == '-' && props.input[23] == '-') {
    bookStore.getBookUUID(props.input)
  } else if (props.input?.length > 0) {
    let words = props.input?.split(" ")
    words.forEach((value, index, array) => {
      if (array[value] != typeof undefined) {
        array[index] = value.charAt(0).toUpperCase() + value.substring(1)
      }
    })
    words = words.join(' ')
    wordUpperCase.value = words
  } else {
    wordUpperCase.value = null
  }
}

watch(() => props.input, () => {
  setTimeout(searchBook, 1000)
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUpdated(() => {
  booksCount.value = carousel.value.children[0].children[0].children.length
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

function handleScroll(): void {
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight && bookStore.bookList.length >= 20) {
    bookStore.fetchMoreBooks();
  }
}
</script>