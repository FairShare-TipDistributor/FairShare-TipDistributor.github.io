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
			<h2>{heading}</h2>

			<div className="grid">
				<div className="grid-col grid-col_8">
					<h3>What is Fair$hare?</h3>

					<p>
						Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Fugiat ad repudiandae rem!
						Amet magnam laboriosam dolorem, sequi quos,
						officiis numquam soluta tempora maiores
						provident, eius ab corporis molestias deleniti
						odit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Debitis optio sunt, nulla
						eius perspiciatis blanditiis ab provident,
						nisi libero, dolorum vitae voluptatem ea
						maxime tempore! Nobis dolor ipsa incidunt
						nisi?
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Voluptatibus, culpa
						deleniti! Cupiditate, mollitia quas in nemo
						illo quod quis est, magni molestias similique
						laboriosam nobis quo corporis ipsam, ad
						facere.
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Distinctio repellendus,
						deleniti autem harum necessitatibus delectus
						velit labore qui eius quae veritatis iusto
						iure odit nesciunt sit. Velit ex error
						doloremque?
					</p>
				</div>
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
