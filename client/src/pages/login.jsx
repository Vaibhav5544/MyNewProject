import { useState } from "react";
import "./login.css";
import { useLoginUserMutation } from "../features/api/authapi";
function Login() {

    const [loginInput, setloginInput] = useState({ email: "", password: "" });
     
    const [loginUser,{data:loginData, error:loginError ,isLoading:loginisLoading, isSuccess:loginisSuccess}]=useLoginUserMutation()
    const changehandle = (e) => {
        const { name, value } = e.target;
        setloginInput({ ...loginInput, [name]: value });

    }

    const onclick = async() => {
        console.log(loginInput);
        const action = loginUser
        await action(loginInput)
    }






    return (


        <>



            <div class="card card-style">
                <div class="card-header headpart">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" href="/login">Login</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link " href="/signup">Signup</a>
                        </li>

                    </ul>
                </div>
                <div class="card-body">
                    <h5>Login</h5>
                    <p>Login with Your email and password.</p>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email </label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" name="email" onChange={changehandle} />
                    </div>
                    <label for="inputPassword5" class="form-label">Password</label>
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder='Enter Your Password' name="password" onChange={changehandle} />
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>


                    <button onClick={onclick} class="btn btn-primary btn-style">Login</button>
                </div>
            </div>


        </>
    )
}

export default Login;