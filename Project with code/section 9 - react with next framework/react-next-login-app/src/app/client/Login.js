"use client"
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import axios from 'axios';

export default function Login() {
let [emailid,setEmailId]=useState();
let [password,setPassword]=useState();
let [msg,setMsg]=useState("");

  const signIn = async (event)=> {
    event.preventDefault();
    console.log(emailid+" "+password);
    let login = {"emailid":emailid,"password":password};
    let result = await axios.post(" http://localhost:3000/server/signin",login);
    setMsg(result.data.msg);
    setEmailId("");
    setPassword("");
  }
    return(<div className='container'>
           <form className='form-group' onSubmit={signIn}>
          <div className='row offset-4'>
              <div className='col-6'>
              <h2>Login Page</h2>
              </div>
          </div>


          <div className='row offset-2'  >
              <div className='col-3'>
                <label>EmailId</label>
              </div>
              <div className='col-3'>
              <input type="email" name="emailid" className="form-control"
              onChange={(event)=>setEmailId(event.target.value)} value={emailid}
              />
              </div>
          </div>

          <div className='row offset-2'  >
              <div className='col-3'>
                <label>Password</label>
              </div>
              <div className='col-3'>
              <input type="password" name="password" className="form-control"
              onChange={(event)=>setPassword(event.target.value)} value={password}
              />
              </div>
          </div>

          <div className='row offset-2'  >
              <div className='col-3'>
                <input type="submit" value="SignIn" className='btn btn-success'/>
              </div>
              <div className='col-3'>
              <input type="reset" value="reset" className='btn btn-info'/>
              </div>
          </div>

          <div className='row offset-4'>
              <div className='col-6'>
              <span style={{"color":"red"}}>{msg}</span>
              </div>
          </div>

        </form>
              
    </div>)
}