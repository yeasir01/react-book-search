import axios from "axios";

export default {
    bookSearch: (query) => {
        return axios.get(`books/api?search=${query}`);
    },
    saveBook: (bookInfo) => {
        return axios.post('books/api', bookInfo)
    },
    getSavedBooks: () => {
        return axios.get('books/api/saved')
    },
    removeBook: (_id) => {
        return axios.delete(`/books/api/${_id}`)
    }
}