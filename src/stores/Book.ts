import {inject, reactive, ref} from "vue";
import {defineStore} from 'pinia';
import {Book} from "@/types/Book";
import {errors} from "msw";

export const useBookStore = defineStore('book', () => {

        const axios = inject('axios');
        const pageNumber: Number = ref(0);
        const sizeNumber: Number = ref(20);
        const book: Book = reactive<Book>({});
        const bookList: Array<Book> = reactive<Book[]>([]);

        /**
         * fetches to the database through an HTTP request, a specific research by passing an integer named pageNumber and
         * another one called sizeNumber resulting in a responses returning the desired page and the desired number of resources in the response.
         *
         * @author damouu <mouadsehbaoui@gmail.com>.
         * @param {number} pageNumber - the desired page number.
         * @param {sizeNumber} sizeNumber - the desired number of resources wanted in the response.
         * @return {Array<Book>} - return an array of books corresponding to the passed  parameters.
         */
        async function getBooks(pageNumber: number, sizeNumber: number): Promise {
            try {
                await axios.get('/book' + '?page=' + pageNumber + '&size=' + sizeNumber).then(response => {
                    response.data.forEach(book => {
                        bookList.push(new Book(book.uuid, book.totalPages, book.title, book.publisher, book.genre, book.created_at, book.author));
                    });
                })
            } catch (e) {
                console.log(e);
            }
        }

        /**
         * fetches the next page of Book from the database and stores the result into the Book's store.
         *
         * @author @Damou
         * @exception {errors}  will throw an exception if the given uuid does not correspond to an existing book.
         * @return {Promise} will return a promise containing the searched book if the UUID exist in the database
         */
        async function fetchMoreBooks(): Promise {
            try {
                await axios.get('/book' + '?page=' + (pageNumber.value += 1) + '&size=' + sizeNumber.value).then(response => {
                    response.data.forEach(book => {
                        bookList.push(new Book(book.uuid, book.totalPages, book.title, book.publisher, book.genre, book.created_at, book.author));
                    });
                })
            } catch (error) {
                console.log(error);
            }
        }


        /**
         * searches for a specific book by the given UUID passes as a parameter if the given UUID exist in the database.
         *
         * @author damouu <mouadsehbaoui@gmail.com>
         * @param {string} uuid - a unique identifier ID associated to a unique Book resource in the Book table.
         * @throws {NotFound} - resource not found with given UUID
         * @return {Promise} Promise object with the found book if te given UUID exist in the database.
         */
        async function getBookUUID(uuid: string): Promise<Book> {
            try {
                await axios.get('/book/' + uuid).then(response => {
                    book.uuid = response.data.uuid
                    book.author = response.data.author
                    book.title = response.data.title
                    book.genre = response.data.genre
                    book.created_at = response.data.created_at
                    book.totalPages = response.data.totalPages
                })
            } catch (e) {
                return e
            }
        }

        /**
         * searches for a specific book by the given UUID passes as a parameter if the given UUID exist in the database.
         *
         * @author damouu <mouadsehbaoui@gmail.com>
         * @param {string} title - the title of a given book.
         * @throws {NotFound} - resource not found with given UUID
         * @return {Promise} Promise object with the found book if te given UUID exist in the database.
         */
        async function getBookTitle(title: string): Promise<Book> {
            try {
                await axios.get('/book' + '?page=1&size=20', {params: {title: title}}).then(response => {
                    bookListTitle.length = 0
                    response.data.forEach(book => {
                        bookListTitle.push(new Book(book.uuid, book.totalPages, book.title, book.publisher, book.genre, book.created_at, book.author));
                    });
                })
            } catch (e) {
                return false;
            }
        }

        return {bookList, fetchMoreBooks, getBooks, getBookUUID, book, getBookTitle, bookListTitle}
    }
)