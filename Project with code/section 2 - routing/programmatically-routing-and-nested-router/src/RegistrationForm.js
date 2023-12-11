import { useState } from "react";
function RegistrationForm({ onSubmit }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);
    const handleKeyUp = () => {
      if (username.length > 0 && password.length > 0) setEnable(false);
      else setEnable(true);
    };
    return (
      <div className="container" style={{"marginTop":"100px"}}>
            
            <div className="row offset-4">
            <div className="col-6">
              <h2>Login Page</h2>
            </div>
            </div>

            <form className="form-group">
            <div className="row offset-4">
            <div className="col-3">
                <label>User Name</label>    
            </div>
            <div className="col-3">
            <input
            type="text"
            id="username-input"
            placeholder="username"
            value={username}
            onKeyUp={handleKeyUp}
            onChange={(event) => setUsername(event.target.value)}
            className="form-control"
            />   
            </div>
            </div>

            <div className="row offset-4">
            <div className="col-3">
                <label>Password</label>    
            </div>
            <div className="col-3">
            <input
            type="password"
            id="password-input"
            placeholder="Password"
            onKeyUp={handleKeyUp}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
            />   
            </div>
            </div>

       

            <div className="row offset-4">
            <div className="col-3">
            <button
          type="submit"
          id="button-input"
          disabled={isEnable}
          onClick={() => onSubmit(username, password)}
          className="btn btn-primary"
        >
          Register
        </button>
        </div>
        <div className="col-3">
            <button
          type="reset"
          id="button-input"
          
          onClick={() => {
            setUsername("")
            setPassword("")
          }
        }
        className="btn btn-danger"
        >
         Reset
        </button>
        </div>
            </div>

            </form>
      </div>
    );
  }

  export default RegistrationForm;