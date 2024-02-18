<template>
  <div class="d-flex mb-3">
    <div class="d-inline-block offset-5">
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
    <div v-if="bookStore.bookListTitle.length == 0  && bookStore.book.uuid == null">
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
    <div v-else-if="bookStore.bookListTitle.length > 0">
      <div ref="scrollComponent" class="row row-cols-1 row-cols-md-5 g-4 mb-5">
        <div v-for="book in bookStore.bookListTitle" :key="book.uuid">
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
import {onMounted, onUnmounted, onUpdated, ref, watch} from "vue";
import {useBookStore} from "@/stores/Book";

const bookStore = useBookStore();
const scrollComponent = ref(null);
const carousel = ref<HTMLDivElement>(null);
const booksCount = ref<number>(null)
const props = defineProps({input: String,})
const wordUpperCase = ref<string | null>(null);
bookStore.getBooks(1, 20);

/**
 * Retrieves a book by either; a UUID or by keywords. when searching by words, each of every word's first letter
 * will be capitalized.
 *
 * @author damouu <mouadsehbaoui@gmail.com>
 * @param {string} searchText - a unique identifier ID associated to a unique Book resource in the Book table. or a given keywords.
 */
function searchBook(searchText) {
  if (searchText[8] == '-' && searchText[13] == '-' && searchText[18] == '-' && searchText[23] == '-') {
    bookStore.getBookUUID(searchText)
  } else if (searchText?.length > 0) {
    let words = searchText?.split(" ")
    words.forEach((value, index, array) => {
      if (array[value] != typeof undefined) {
        array[index] = value.charAt(0).toUpperCase() + value.substring(1)
      }
    })
    words = words.join(' ')
    wordUpperCase.value = words
    bookStore.getBookTitle(wordUpperCase.value)
  } else {
    wordUpperCase.value = null
  }
}

/**
 * new book's data will be fetched as the user scroll the page.
 *
 * @author damouu <mouadsehbaoui@gmail.com>
 */
function handleScroll(): void {
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight && booksCount.value >= 20) {
    bookStore.fetchMoreBooks();
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUpdated(() => {
  booksCount.value = carousel.value.children[0].children[0].children.length
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

watch(() => props.input,
    (value) => {
      if (value) {
        searchBook(value);
      } else if (value == null) {
        bookStore.bookListTitle.length = 0
        for (let x in bookStore.book) {
          bookStore.book[x] = undefined
        }
      }
    },
    {deep: true})

</script>