import React from 'react'

const Register = () => {
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
                  <div className="login-field">
                      <span className="input-icons"><i className="fa-solid fa-user"></i></span>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="First name"  />
                  </div>
              </div>
              <div className="col-12">
                  <div className="login-field">
                      <span className="input-icons"><i className="fa-solid fa-user"></i></span>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Last name" />
                  </div>
              </div>
              <div className="col-12">
                  <div className="login-field">
                      <span className="input-icons"><i className="fas fa-envelope"></i></span>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Your Email" />
                  </div>
              </div>
              <div className="col-12">
                  <div className="login-field">
                      <span className="input-icons"><i className="fa-solid fa-lock"></i></span>
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Your Password" />
                  </div>
              </div>
              <div className="col-12">
                  <div className="login-field">
                      <span className="input-icons"><i className="fa-solid fa-lock"></i></span>
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm Password" />
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
                  <button type="submit" className="checkout_btn">Sign Up</button>
              </div>
              <p className="paragraph mt-4">Already have an account? <a href="#!">Sign In</a></p>
          </form>
        </div>
        
      </div>
    </div>
  
  )
}

export default Register