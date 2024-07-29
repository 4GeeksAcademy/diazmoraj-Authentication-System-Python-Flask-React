import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div>
				<h1 className="mb-4">Welcome to my app</h1>
				<Link to="/api/login">
					<buttom className="btn btn-primary me-4">Log In</buttom>
				</Link>
				<Link to="/api/signup">
					<buttom className="btn btn-success">Sign Up</buttom>
				</Link>
			</div>
		</div>
	);
};
