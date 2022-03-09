import React, {useState} from "react";

let Form = () =>{
    let [state, setState] = useState({
        user : {
            username : '',
            password : ''
        }
    });

  return (
     <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                        User Name
                        </div>
                        <div className="card-body">
                        <form>
                              <label>
                              Username:
                              <input
                                  value={state.user.username}
                                  type="text" name="name" />
                              </label>
                              <label>
                              Password
                              <input
                                  value={state.user.password}
                                  type="password" name="password"/>
                              </label>
                              <input type="submit" className="btn btn-primary" value="Login" />
                        </form>
                        </div>
                    </div>
                </div>
            </div>

       </div>
  )
}

export default Form;