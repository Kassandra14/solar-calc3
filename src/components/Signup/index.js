import React from "react";

function Signup(props) {
    console.log(props);
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="user">User:</label>
          <input
            value={props.user}
            onChange={props.signupFormHandler}
            name="city"
            type="text"
            className="form-control"
            placeholder="Username"
            id="Username"
          />
           <input
            value={props.password}
            onChange={props.signupFormHandler}
            name="password"
            type="decimal"
            className="form-control"
            placeholder="password"
            id="password"
          />
              <input
            value={props.email}
            onChange={props.signupFormHandler}
            name="email"
            type="decimal"
            className="form-control"
            placeholder="email"
            id="email"
          />
          <button type="submit" onClick={props.signupFormHandler} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
  export default Signup