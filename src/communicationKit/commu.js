import axios from 'axios'
import {host} from "../config";

export const getPhoto = (name,callback) => {
    axios.get(host + 'getPhoto', {
        params:{
            name:name
        }
    }).then((res) => {
        callback(res.data);
    })
}

