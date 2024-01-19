import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

// CUSTOM COMPONENTS
import RegisterForm from "../LoginAndRegisterPages/RegisterPage/RegisterForm/RegisterForm";
import LoginForm from "../LoginAndRegisterPages/LoginPage/LoginForm/LoginForm";
import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "../../Buttons/DesignedButtons";

function LandingPage() {
	const [heading, setHeading] = useState("Welcome to Fair$hare!");
	const history = useHistory();

	const registration = (event) => {
		history.push("/registration");
	};

	return (
		<div className="container landing-background">
			<div className="grid">
				<div className="grid-col grid-col_6">test 6</div>
				<div className="grid-col grid-col_6">
					<LoginForm />

					<center>
						<div>
							<PrimaryButton
								text="Log In"
								onClick={registration}
							/>
						</div>
					</center>
					<div>
						<a href="#">Forgot User ID or Password?</a>
					</div>

					<SecondaryButton
						text="New User?"
						onClick={registration}
					/>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
