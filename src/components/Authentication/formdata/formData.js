import React from "react";

const formData = (props) => {
  return (
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
          onChange={(e) => props.setStates(e.target.value)}
          value = {props.states}
        />
      </div>
    </div>
  );
};

export default formData;
