import axios from "axios";
import { base_url, delete_url, get_url, post_url, updata_url } from "../../../url";


let post_room = (action) => {
    // console.log(action ,"this action from post room");
    return axios.post(base_url + post_url, action.payload).then((res) => {
        // console.log(res,"res is post room");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let get_room = (action) => {
    // console.log(action, "this action from get rom");
    return axios.get(base_url + get_url).then((res) => {
        // console.log(res, "res is get rom");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let delete_room = (action) => {
    // console.log(action, "this action from delete room");
    return axios.delete(base_url + delete_url + action.payload).then((res) => {
        // console.log(res, "res is delete room");
        let data = res.data;
        let status = res.status;
        return { data, status };
    })
}

let updata_room = (action) => {
    console.log(action, "this action from updata room");
    return axios.put(base_url + updata_url + action.payload.id, action.payload).then((res) => {
        console.log(res, "res is updata room");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

export { post_room, get_room, delete_room, updata_room }