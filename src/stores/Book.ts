import {inject, reactive, ref} from "vue";
import {defineStore} from 'pinia';
import {Book} from "@/types/Book";

export const useBookStore = defineStore('book', () => {

    const axios = inject('axios');
    const pageNumber: Number = ref(0);
    const sizeNumber: Number = ref(20);
    const bookList: Array<Book> = reactive<Book[]>([]);

    async function getBooks(): void {
        try {
            await axios.get('/book' + '?page=' + pageNumber.value + '&size=' + sizeNumber.value).then(response => {
                response.data.forEach(book => {
                    bookList.push(new Book(book.uuid, book.totalPages, book.title, book.publisher, book.genre, book.created_at, book.author));
                });
            })
        }
    }

    async function fetchMoreBooks(): void {
        try {
            await axios.get('/book' + '?page=' + (pageNumber.value += 1) + '&size=' + sizeNumber.value).then(response => {
                response.data.forEach(book => {
                    bookList.push(new Book(book.uuid, book.totalPages, book.title, book.publisher, book.genre, book.created_at, book.author));
                });
            })
        }
    }

    return {bookList, fetchMoreBooks, getBooks}
})