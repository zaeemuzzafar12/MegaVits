import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { getUserDetails } from '../../functions/apifunctions';

const UserDashbaord = () => {
    const token = localStorage.getItem('token');
    console.log("token in dashboard",token)
    const [data,setdata] = useState()
    const imagebaseurl = 'http://localhost:5000/'
    
    const foo = async()=>{
      const get = await getUserDetails('user/profile')
      console.log("get user details ",get)
      setdata(get)
    }

   useEffect(()=>{
    foo()
    
   },[])
      
   console.log(`${imagebaseurl}${data?.data?.data?.avator}`)
  return (
    
    <div>
      <img src={`${imagebaseurl}${data?.data?.data?.avator}`} alt="User avatar" />
      <h2>{data?.data?.data?.username}</h2>
      <p>{data?.data?.data?.address}</p>
    </div>
  )
}

export default UserDashbaord
