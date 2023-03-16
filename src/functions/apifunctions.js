import baseurl from "./baseurl";
import axios from 'axios'


const token = localStorage.getItem('token');
export const getApi = async(url)=>{

    const data = await axios.get(`${baseurl}${url}`)
    return data 
}

export const getUserDetails = async(url)=>{
    const config = {
        headers:{
            'Authorization': `Bearer ${token}`
    
        }
    }
        const data = await axios.get(`${baseurl}${url}`,config)
        return data 
    }
    

export const postApi= async(url,payload)=>{
   
    const data = await axios.post(`${baseurl}${url}`,payload)
    const token =await  data?.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    return token;
} 


export const postApis = async(url,payload)=>{
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };  
    const data = await axios.post(`${baseurl}${url}`,payload,config) 
    return data
}


export const searchApis = async(url)=>{
    const data = await axios.get(`${baseurl}${url}`)
    return data 
}




