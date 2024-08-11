import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const URL = "https://fantastic-doodle-vj9q4gpvg7v3w77v-3001.app.github.dev"

    const handleLogin = (event) => {
        event.preventDefault();
        let loginSuccess = false;

        fetch(URL + '/api/login',
            {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
                headers: { "Content-Type": "application/json"},
            })
            .then((response) => {
                if (response.ok) {
                    loginSuccess = true;
                    return response.json();
                }
                throw new Error("Login Failed");
            })
            .then((data) => {
                sessionStorage.setItem("token", data["access_token"]);
                if (loginSuccess) {
                    navigate("/info");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("User or Password invalid")
            })
    };

    return (
        <div className="d-flex flex-column justify-content-between min-vh-100" style={{ backgroundColor: "#f8f9fa", margin: "0" }}>
            <div style={{ position: "relative", width: "100%" }}>
                <img src="" alt="" className="img-fluid mb-3" style={{ width: "100%", maxHeight: "150px", objectFit: "cover" }} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ flexGrow: 1 }}>
                <form onSubmit={handleLogin} className="mt-5 p-5 bg-white registerForm d-flex flex-column justify-content-center" style={{ maxWidth: "400px", width: "100%", marginBottom: "5rem", border: '1px solid #5751e1' }}>
                    <h3 className="mb-3 portraitSecundaryColor text-center">Login</h3>
                    <div className="mb-3 mt-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ borderRadius: '15px', border: '1px solid #5751e1' }}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ borderRadius: '15px', border: '1px solid #5751e1' }}
                            required
                        />
                    </div>
                    <div className="mb-4 mt-2 d-flex flex-row justify-content-center gap-5">
                        <Link to='/'>
                            <button className="btn btn-primary" style={{ width: "80px" }}>Atrás</button>
                        </Link>
                        <button type="submit" className="btn btn-success" style={{ width: "120px" }}>Login</button>
                    </div>
                    <div className="textRegister mt-3">
                        <Link to='/signup'>
                            <span className="portraitSecundaryColor text-center" style={{ fontSize: '15px' }}>Register</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;