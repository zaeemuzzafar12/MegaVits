
import React,{useState} from 'react'
import { postApi } from '../../functions/apifunctions';
import baseurl from "../../functions/baseurl";
import axios from 'axios'
import Formdata from '../Authentication/formdata/formData'
const Register = () => {

    const [username, setusername] = useState('');
    const [address, setaddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avator, setavator] = useState('');
    const [phone, setphone] = useState('');


const handleChange = async(e) => {
    e.preventDefault();
    const formdata = new FormData()
    formdata.append('username',username);
    formdata.append('address',address);
    formdata.append('email',email);
    formdata.append('password',password);
    formdata.append('avator',avator);
    formdata.append('phone',phone);

    console.log("formdata ",formdata)

    const data = await axios.post(`${baseurl}${'user/createUsers'}`,formdata)
    console.log(data)
    return data;
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
          <div className="col-12">
            {/* <Formdata type='text' onChange={setusername} value={username} placeholder='username'  /> */}
                  <div className="login-field">
                      <span className="input-icons"><i className="fa-solid fa-user"></i></span>
                      <input 
                        type="text" 
                        onChange={(e) => setusername(e.target.value) } 
                        value={username} 
                        className="form-control" 
                        id="inputEmail4" 
                        placeholder="username" 
                         />
                  </div>
              </div>
              <div className="col-12">
              {/* <Formdata type='text' onChange={setaddress} value={address} placeholder='address' /> */}
                  <div className="login-field">
                    
                      <span className="input-icons"><i className="fa-solid fa-user"></i></span>
                      <input 
                        type="text" 
                        onChange={(e) => setaddress(e.target.value)} 
                        value = {address} 
                        className="form-control" 
                        id="inputEmail4" 
                        placeholder="address" />
                  </div>
              </div>
              
              <div className="col-12">
              {/* <Formdata type='email' onChange={setEmail} value={email} placeholder='Your Email' /> */}
                  <div className="login-field">
                      <span className="input-icons"><i className="fas fa-envelope"></i></span>
                      <input type="email" onChange={(e) => setEmail(e.target.value)} value = {email}  className="form-control" id="inputEmail4" placeholder="Your Email" />
                  </div>
              </div>
              <div className="col-12">
              {/* <Formdata type='password' onChange={setPassword} value={password} placeholder='Your Password' /> */}
                  <div className="login-field">
                      <span className="input-icons"><i className="fa-solid fa-lock"></i></span>
                      <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value = {password} 
                        className="form-control" 
                        id="inputPassword4" 
                        placeholder="Your Password" />
                  </div>
              </div>
              
              <div className="col-12">
                
              {/* <Formdata type='text' onChange={setphone} value={phone} placeholder='phone' /> */}
                  <div className="login-field">
                      <span className="input-icons"><i className="fa-solid fa-user"></i></span>
                      <input 
                        type="text" 
                        onChange={(e) =>setphone(e.target.value)} 
                        value = {phone} 
                        className="form-control" 
                        id="inputEmail4" 
                        placeholder="phone"
                         />
                  </div>
              </div>
              <div className="col-12">
              {/* <Formdata type='file' onChange={setavator} value={avator} placeholder='upload image' /> */}
                  <div className="login-field">
                      <span className="input-icons"><i className="fa-solid fa-lock"></i></span>
                      <input 
                        type="file" 
                        onChange={(e) => setavator(e.target.value) } 
                        value = {avator} 
                        className="form-control" 
                        id="inputPassword4" 
                        placeholder="upload image"
                         />
                  </div>
              </div>

              <div className="col-12 check-out">
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                      <label className="form-check-label" for="gridCheck">
                         By Signing up you agre to our <a href="#!">Terms & Condition</a> and <a href="#!">privicy policy</a>
                      </label>
                  </div>
              </div>
              <div className="col-12">
                  <button type="submit" className="checkout_btn" onClick={handleChange}>Sign Up</button>
              </div>

              

              <p className="paragraph mt-4">Already have an account? <a href="#!">Sign In</a></p>
          </form>
        </div>
        
      </div>
    </div>
  
  )
}

export default Register