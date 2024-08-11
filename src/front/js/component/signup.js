import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const URL = "https://fantastic-doodle-vj9q4gpvg7v3w77v-3001.app.github.dev"

    const handleSubmit = async (event) => {
        console.log(handleSubmit)
        event.preventDefault();

        try{
            const response = await fetch(URL + '/api/signup',
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Register failed", errorData);
                return;
            }

            navigate("/login");
        } catch {
            console.error("Error registering user", error)
        }
    }

    return (
        <div className="d-flex flex-column justify-content-between min-vh-100" style={{ backgroundColor: "#f8f9fa", margin: "0" }}>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ flexGrow: 1 }}>
                <form onSubmit={handleSubmit} className="mt-5 p-5 bg-white registerForm d-flex flex-column justify-content-center" style={{ maxWidth: "400px", width: "100%", marginBottom: "5rem", border: '1px solid #5751e1' }}>
                    <h3 className="mb-3 portraitSecundaryColor text-center">Signup</h3>
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
                            <button type="button" className="btn btn-secondary">Back</button>
                        </Link>
                            <button width="120" type='submit' className="btn btn-success">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup