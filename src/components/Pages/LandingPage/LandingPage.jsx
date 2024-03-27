import React, { useEffect, useState } from "react";

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
import FairShareLogoMobile from "../../../Images/FairShareLogoMobile.png";

function LandingPage() {
	const [heading, setHeading] = useState("Welcome to Fair$hare!");
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() =>{
		function handleResize() {
			const{ innerWidth, innerHeight } = window;
			const aspectRatio = innerWidth / innerHeight;

			const mobileAspectRatioThreshold = 0.75;
			setIsMobile(aspectRatio < mobileAspectRatioThreshold)
			console.log('isMobile:', isMobile);
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		// clean function, remove event listener
		return () => window.removeEventListener('resize', handleResize);
	}, [] )

	return (
		<>
		{isMobile ? (
			<div className="container landing-background">
				<div className="center">
					<img
						className="fair-share-logo"
						src={FairShareLogoMobile}
					/>
				</div>
				<LoginForm />
			</div>
				) : (
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
		)}
		</>
	);
}

export default LandingPage;
