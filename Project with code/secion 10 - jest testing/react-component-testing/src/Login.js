import { useState } from "react";

function Login() {

let[email,setEmailId]=useState("");
let[password,setPassword]=useState("");
let [msg,setMessage]=useState("");
let checkUser= (event)=> {
    if(email=="admin@gmail.com" && password=="admin@123"){
        setMessage("successfully login");
    }else {
        setMessage("failure try once again");
    }
}
return(
    <div>
        <h3>Login Page</h3>
        <form onSubmit={checkUser}>
            <label>EmailId</label>
            <input type="email" name="emailid" onChange={(event)=>setEmailId(event.target.value)} placeholder="enter emailid"/><br/>
            <label>Password</label>
            <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)} placeholder="enter password"/><br/>
            <input type="submit" value="SignIn" data-testid="submit-button"/>
            <input type="reset" value="reset" data-testid="reset-button"/>
        </form>
        <br/>
        <span data-testid="result">{msg}</span>
    </div>
)
}

export default Login;