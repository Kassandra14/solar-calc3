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
          name="user"
          type="string"
          className="form-control"
          placeholder="user"
          id="user"
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
             <input
          value={props.password}
          onChange={props.signupFormHandler}
          name="password"
          type="decimal"
          className="form-control"
          placeholder="password"
          id="password"
        />
        <button type="submit" onClick={props.signupFormHandler} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}


export default Signup 