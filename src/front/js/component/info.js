import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const Info = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar si hay un token, de lo contrario redirigir al login
        if (!sessionStorage.getItem("token")) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="text-center mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1 d-flex justify-content-center">
                    <h1 className="mb-0">Private Info</h1>
                </div>
                <div className="ml-auto" style={{ marginRight: '20px' }}>
                    <Link to="/">
                        <button className="btn btn-danger">Exit</button>
                    </Link>
                </div>
            </div>
            <img src="https://images.bauerhosting.com/empire/2023/08/star-wars-timeline.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80" alt="Private info" />
        </div>
    );
};

export default Info;