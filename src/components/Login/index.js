import React from "react";

function Login(props) {
  console.log(props);
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="user">User:</label>
       
         <input
          value={props.password}
          onChange={props.loginemail}
          name="password"
          type="decimal"
          className="form-control"
          placeholder="password"
          id="password"
        />
            <input
          value={props.email}
          onChange={props.loginpassword}
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


// import React from "react";

// function Login(props) {
//   class login extends Component {
    // state = {
    //   name: "",
    //   password: "",
    //   email: "",
    //   results: null,
    //   error: "",
    // };
  
      
  // loginpassword = (event) => {
  //   this.setState({ 
  //     password: event.target.value, 
  //     email: e.target.value
  //     })
     
  // };

  // var body = {
  
  //   "email": this.state.email,
  //   "password": this.state.password
  // }
 
  // if (body) {
  // console.log(body);
  //   // Send a POST request to the API endpoint
  //   const response = fetch('/api/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify( body ),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
    
  //   if (response.ok) {
  //     // If successful, redirect the browser to the profile page
  //     document.location.replace('/profile');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }}
  

//   return (
//     <form className="search">
//       <div className="form-group">
//         <label htmlFor="user">User:</label>
       
//          <input
//           value={props.password}
//           onChange={loginpassword}
//           name="#password-login"
//           type="decimal"
//           className="form-control"
//           placeholder="password"
//           id="password-login"
//         />
//             <input
//           value={props.email}
//           onChange={loginemail}
//           name="#email-login"
//           type="decimal"
//           className="form-control"
//           placeholder="email"
//           id="email-login"
//         />
//         <button type="submit" onClick={Login()} className="btn btn-success">
//           Search
//         </button>
//       </div>
//     </form>
//   );


//   } 
// }
// export default Login 
