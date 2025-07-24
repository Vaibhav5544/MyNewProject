// LXeU4DSqDdz0JTmz
// mongodb+srv://guptakunal97978:LXeU4DSqDdz0JTmz@cluster0.fgrlvze.mongodb.net/
// YRjK0z82uJj6eaiR
//
import { useState } from "react";
import "./login.css";
import { useRegisterUserMutation } from "../features/api/authapi";
function Signup() {

    const [signupInput, setsignupInput] = useState({})
    const [registerUser,{data:registerData, error:registerError ,isLoading:registerisLoading, isSuccess:registerisSSuccess}]=useRegisterUserMutation()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setsignupInput({ ...signupInput, [name]: value });
    }

    const handleClick = async() => {
        console.log(signupInput)
        const action = registerUser
        await action(signupInput);
    }





    return (


        <>



            <div class="card card-style">
                <div class="card-header headpart">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="true" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/signup">Signup</a>
                        </li>

                    </ul>
                </div>
                <div class="card-body">
                    <h5>Signup</h5>
                    <p>Create your account</p>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" name="name" onChange={handleChange} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" name="email" onChange={handleChange} />
                    </div>
                    <label for="inputPassword5" class="form-label">Password</label>
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder='Enter Your Password' name="password" onChange={handleChange} />
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                    

                    <button onClick={handleClick} class="btn btn-primary btn-style">Signup</button>
                </div>
            </div>


        </>
    )
}

export default Signup;