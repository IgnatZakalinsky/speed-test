import * as axios from "axios/index";


export const API = {
    getData (url) {
        return axios.get(url)
    }
}