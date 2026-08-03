import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        const response = await fetch("http://localhost:5000/user/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                email,
                password,
            }),

        });

        const data = await response.json();

        if (response.ok) {

            localStorage.setItem("token", data.token);
            navigate("/Dashboard");

        } else {

            alert(data.message);

        }

    }

    return (

        <div className="login-page">

            <img
                src="/file.svg"
                alt="TrackerMan Background"
                className="bg-image"
            />

            <div className="login-container">

                <div className="glass-card">

                    <h1>WELCOME BACK</h1>

                    <p className="subtitle">
                        Sign in to Job Tracker Man
                    </p>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="submit">
                            LOGIN
                        </button>

                    </form>

                    <p className="bottom-text">

                        New here?

                        <span onClick={() => navigate("/Signup")}>
                            Create Account
                        </span>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;