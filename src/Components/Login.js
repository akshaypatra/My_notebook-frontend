import React,{useState} from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [credentials, setCredentials] = useState({email:"",password:""});
    let history=useNavigate();


    const handleSubmit=async(e)=>{
            e.preventDefault();
            
            // eslint-disable-next-line
            const response = await fetch("http://localhost:4000/api/auth/login", {
                method: "POST",
          
                headers: {
                  "Content-Type": "application/json"
                  },
                  body: JSON.stringify({email:credentials.email,password:credentials.password}),
          
                
              });
            // eslint-disable-next-line
            const json=await response.json();
            console.log(json);
            if(json.success){
                //save the auth token and redirect
                
                localStorage.setItem('token',json.authToken);
                history("/");
                

            }else{
                alert("Invalid credentials");
            }
    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (
    <div className="container">
        <h1 style={{textAlign:"start",marginTop:"4vh"}}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 my-5">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={onChange}
            type="password"
            name="password"
            value={credentials.password}
            className="form-control"
            id="password"
          />
        </div>
      
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
