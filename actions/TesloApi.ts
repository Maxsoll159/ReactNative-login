import { getItem } from "@/config/adapters/storage-adapter";
import axios from "axios";

const tesloApi = axios.create({
    baseURL: "http://192.168.18.5:3000/api",
    headers: {
        'Content-Type' : "application/json"
    }
})


tesloApi.interceptors.request.use(
    async(config)=>{

        const token = await getItem("token")

        if(token){
            config.headers["Authorization"] = `Bearer ${token}`
        }

        return config
    }
)





export {
    tesloApi
}