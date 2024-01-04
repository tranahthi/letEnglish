import axios from "axios";

const AxiosClient = axios.create({
    baseURL : `http://192.168.1.13:8081`,
});


export default AxiosClient