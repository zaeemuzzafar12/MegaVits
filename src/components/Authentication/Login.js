import React ,{useState} from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import {postApi} from '../../functions/apifunctions'

const Login = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleChange = async (e)=>{
    e.preventDefault()
    const payload={
      email:email,
      password:password
    }
    const token = await postApi('user/login',payload);
    if(token !== null) {
      window.localStorage.setItem("token",token?.data);
      navigate("/userdashboard");
    }

  }

  return (

  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form className="row g-3">
            <div className="col-12">
                <div className="login-field">
                    <span className="input-icons"><i className="fas fa-envelope"></i></span>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="inputEmail4" 
                    placeholder="Your Email" 
                    onChange={(e) => setemail(e.target.value)} />
                </div>
            </div>
            <div className="col-12">
                <div className="login-field">
                    <span className="input-icons"><i className="fa-solid fa-lock"></i></span>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="inputPassword4" 
                    placeholder="Your Password" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="col-12 check-out">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
                <a href="#!">Forget Password?</a>
            </div>
            <div className="col-12">
                <button type="submit" className="checkout_btn" onClick={(e)=>{handleChange(e)}}>Login</button>
            </div>
             <p className="paragraph mt-4">Not register yet? <a href="#!" data-bs-toggle="modal" data-bs-target="#signupModal">Create an Account</a></p>
        </form>
      </div>
      
    </div>
  </div>

  )
}

export default Login