import React, { useState } from "react";

import "./LandingPage.css";

// CUSTOM COMPONENTS
// This page is the Left side of the entire Landing/Home Page

import RegisterForm from "../LoginAndRegisterPages/RegisterPage/RegisterForm/RegisterForm";
import LoginForm from "../LoginAndRegisterPages/LoginPage/LoginForm/LoginForm";
import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "../../Buttons/DesignedButtons";

import FairShareLogo from "../../../Images/FairShareLogo.png";

function LandingPage() {
	const [heading, setHeading] = useState("Welcome to Fair$hare!");

	return (
		<div className="container landing-background">
			<div className="grid">
				<div className="grid-col grid-col_6">
					<div className="center">
						<img
							className="fair-share-logo"
							src={FairShareLogo}
						/>
					</div>
				</div>

				<div className="grid-col grid-col_6">
					<LoginForm />
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
