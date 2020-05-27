import axios from "axios";

export default {
    bookSearch: (query) => {
        return axios.get(`/api?search=${query}`);
    }
}