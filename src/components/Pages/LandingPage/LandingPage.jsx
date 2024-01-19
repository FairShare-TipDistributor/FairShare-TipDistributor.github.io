import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

// CUSTOM COMPONENTS
import RegisterForm from "../LoginAndRegisterPages/RegisterPage/RegisterForm/RegisterForm";
import LoginForm from "../LoginAndRegisterPages/LoginPage/LoginForm/LoginForm";

function LandingPage() {
	const [heading, setHeading] = useState("Welcome to Fair$hare!");
	const history = useHistory();

	const registration = (event) => {
		history.push("/registration");
	};

	return (
		<div className="container">
			<h2></h2>

			<div className="grid">
				<div className="grid-col grid-col_8"></div>
				<div className="grid-col grid-col_4">
					<LoginForm />

					<center>
						<h4>Not a Member?</h4>
						<button
							className="btn btn_sizeSm"
							onClick={registration}
						>
							Register
						</button>
					</center>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
