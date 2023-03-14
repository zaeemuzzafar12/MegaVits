import React from "react";

const formData = (props) => {
console.log(props)
  return (
    <div className="col-12">
    <div>
      
      <div className="login-field">
        <span className="input-icons">
          <i className="fa-solid fa-user"></i>
        </span>
        <input
          type={props.type}
          className="form-control"
          id="inputEmail4"
          placeholder={props.placeholder}
          onChange={props.onChange}
          value = {props.states}
        />
      </div>
      </div>
    </div>
  );
};

export default formData;
