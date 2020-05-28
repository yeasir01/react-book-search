import axios from "axios";

export default {
    bookSearch: (query) => {
        return axios.get(`books/api?search=${query}`);
    },
    saveBook: (bookInfo) => {
        return axios.post('books/api', bookInfo)
    }
}