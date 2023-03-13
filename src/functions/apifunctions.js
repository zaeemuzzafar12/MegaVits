import baseurl from "./baseurl";
import axios from 'axios'

export const getApi = async(url)=>{
    const data = await axios.get(`${baseurl}${url}`)
    return data 
}


export const postApi= async(url,payload)=>{
   
    const data = await axios.post(`${baseurl}${url}`,payload)
    const token =await  data?.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    return token;
} 







