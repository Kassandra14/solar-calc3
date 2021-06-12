import React from "react";

function Login(props) {
  console.log(props);
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="user">User:</label>
       
         <input
          value={props.password}
          onChange={props.loginFormHandler}
          name="password"
          type="decimal"
          className="form-control"
          placeholder="password"
          id="password"
        />
            <input
          value={props.email}
          onChange={props.loginFormHandler}
          name="email"
          type="decimal"
          className="form-control"
          placeholder="email"
          id="email"
        />
        <button type="submit" onClick={props.loginFormHandler} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}


export default Login 
