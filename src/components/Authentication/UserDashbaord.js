import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { postApi } from '../../functions/apifunctions';

const UserDashbaord = () => {
    const token = localStorage.getItem('token');
    
    // const userProfile =  () => {
    //     axios.create({ 
    //       'http://localhost:3000/demo/user/profile',
    //       headers: 
    //       { 
    //         Authorization: `Bearer ${token}` 
        
    //     }}).then((res) => console.log(res))
    // }

    // useEffect(() => {
    //     userProfile()
    // },[])

  return (
    <div>
      
    </div>
  )
}

export default UserDashbaord
