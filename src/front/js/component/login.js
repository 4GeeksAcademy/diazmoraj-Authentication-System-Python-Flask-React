import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
}

const handleLogin = () => {
    let loginsucess = false;
    fetch("https://obscure-space-giggle-7j6pqr7944x2xvr9-3001.app.github.dev/api/login",
        {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: { "Content-Type": application / json },
        })
        .then((response) => {
            if (response.ok) {
                loginsucess = true;
                return response.json();
            }
        })
        .then((data) => {
            sessionStorage.setItem("token", data.access_token);
            if (loginsucess) {
                navigate("/api/private");
            }
        })
        .catch((error) => {
            console.error(error);
            alert("User or Password invalid")
        })

    return (
        <div className="d-flex flex-column justify-content-between min-vh-100" style={{ backgroundColor: "#f8f9fa", margin: "0" }}>
            <div style={{ position: "relative", width: "100%" }}>
                <img src="https://i.postimg.cc/XJ784zpy/Whats-App-Image-2024-06-17-at-19-29-08.jpg" alt="Jumbotron" className="img-fluid mb-3" style={{ width: "100%", maxHeight: "150px", objectFit: "cover" }} />
                <div style={{ position: "absolute", top: "50%", left: "20%", transform: "translate(-20%, -50%)", color: "black" }}>
                    <h1 className="mediumWeight portraitSecundaryColor text-center">¡Bienvenid@ a Acua!</h1>
                </div>
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
                            <MultiButtonNew color="purple" text="Atras" width="80" Btype='button' />
                        </Link>
                        <MultiButtonNew color="orange" text="Inicia sesión" width="120" Btype='submit' />
                    </div>
                    <div className="textRegister mt-3">
                        <Link to='/signup'>
                            <span className="portraitSecundaryColor text-center" style={{ fontSize: '15px' }}>¿Todavía no tienes cuenta? Registrate aquí</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;