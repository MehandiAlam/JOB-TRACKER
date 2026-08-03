import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Signup.css";

function Signup() {

    const navigate = useNavigate();

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    async function handlesubmit(e) {

        e.preventDefault();

        const response = await fetch("http://localhost:5000/user/signup",{

            method:"POST",

            headers:{
                "Content-Type":"application/json",
            },

            body:JSON.stringify({
                name,
                email,
                password,
            }),

        });

        const data = await response.json();

        if(response.ok){

            navigate("/Login");

        }

        else{

            alert(data.message);

        }

    }

    return(

        <div className="signup-page">

            <div className="overlay"></div>

            <div className="signup-container">

                <div className="signup-card">

                    <h1>Create Account</h1>

                    <p>Start tracking your career journey.</p>

                    <form onSubmit={handlesubmit}>

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e)=>setname(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                        />

                        <button type="submit">

                            Create Account

                        </button>

                    </form>

                    <div className="bottom-text">

                        Already have an account?

                        <Link to="/Login">

                            Login

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Signup;