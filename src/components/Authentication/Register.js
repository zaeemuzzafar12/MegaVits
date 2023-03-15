
import React,{useState} from 'react'
import { postApis } from "../../functions/apifunctions";
import baseurl from "../../functions/baseurl";
import axios from 'axios'
import FormsData from '../Authentication/formdata/formData'
import {useNavigate} from 'react-router-dom'
const Register = () => {

    const [username, setusername] = useState('');
    const [address, setaddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avator, setavator] = useState('');
    const [phone, setphone] = useState('');
    const navigate = useNavigate()
    console.log("navigate ",navigate)


const handleusername =(e)=>{
 
    setusername(e?.target?.value)
  
}
const handleaddress =(e)=>{
  
    setaddress(e?.target?.value)
  
}
const handleemail =(e)=>{
  
    setEmail(e?.target?.value)
 
}
const handlepassword =(e)=>{
  
    setPassword(e?.target?.value)
  
}
const handleavator =(e)=>{
  
    setavator(e?.target?.files[0])
  
 
}
const handlephone =(e)=>{
  
    setphone(e?.target?.value)
  
}



const handleChange = async(e) => {
    e.preventDefault();
    
    
    console.log("username",username)
    console.log("address",address)
    console.log("email",email)
    console.log("password",password)
    console.log("phone",phone)
    console.log("avator",avator)

    let payload = new FormData();
    payload.append('username',username);
    payload.append('address',address);
    payload.append('email',email);
    payload.append('password',password);
    payload.append('phone',phone);
    payload.append('avator',avator);
    

    

    const data = await postApis('user/createUsers',payload)
    if(data.status === 200){
        navigate('/login')
    }

    console.log(data)

   

   
}
  return (
    
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="signupModalLabel">Sign Up</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form className="row g-3">
         

                  <FormsData 
                  type='text' 
                  onChange={(e)=>handleusername(e)} 
                  value={username} 
                  placeholder='username'  
                  />


                  
              
              

              <FormsData 
                  type='text' 
                  onChange={(e)=>handleaddress(e)} 
                  value={address} 
                  placeholder='address'  
              />
                  
              
              
              

              <FormsData 
                  type='email' 
                  onChange={(e)=>handleemail(e)} 
                  value={email} 
                  placeholder='email'  
              />
                  
             


              

              <FormsData 
                  type='password' 
                  onChange={(e)=>handlepassword(e)} 
                  value={password} 
                  placeholder='password'  
              />
                  
              
              
             
                
              <FormsData 
                  type='text' 
                  onChange={(e)=>handlephone(e)} 
                  value={phone} 
                  placeholder='phone'  
              />
                 
              

              

              <FormsData 
                  type='file' 
                  onChange={(e)=>handleavator(e)} 
                  value={avator} 
                  placeholder='upload image'  
              />
                  
              

              <div className="col-12 check-out">
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                      <label className="form-check-label" for="gridCheck">
                         By Signing up you agre to our <a href="#!">Terms & Condition</a> and <a href="#!">privicy policy</a>
                      </label>
                  </div>
              </div>
              <div className="col-12">
                  <button type="submit" className="checkout_btn" onClick={(e) => handleChange(e)}>Sign Up</button>
              </div>

              

              <p className="paragraph mt-4">Already have an account? <a href="#!">Sign In</a></p>
          </form>
        </div>
        
      </div>
    </div>
  
  )
}

export default Register