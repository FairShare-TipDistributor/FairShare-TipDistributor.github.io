import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import RegisterForm from "../../RegisterPage/RegisterForm/RegisterForm";
import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "../../../../Buttons/DesignedButtons";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showHidePassword, setShowHidePassword] = useState(false);
	const errors = useSelector((store) => store.errors);
	const dispatch = useDispatch();

	const history = useHistory();
	const registration = (event) => {
		history.push("/registration");
	};

	const login = (event) => {
		event.preventDefault();
		if (username && password) {
			dispatch({
				type: "LOGIN",
				payload: {
					username: username,
					password: password,
				},
			});
		} else {
			dispatch({ type: "LOGIN_INPUT_ERROR" });
		}
	}; // end login

	const showPassword = () => {
		setShowHidePassword(!showHidePassword);
	};

	let passwordState;

	if (showHidePassword === true) {
		passwordState = "text";
	} else {
		passwordState = "password";
	}

	return (
		<div className="formPanel">
			<form onSubmit={login}>
				<h4 className="login-heading-4">Log In</h4>
				{errors.loginMessage && (
					<h3 className="alert" role="alert">
						{errors.loginMessage}
					</h3>
				)}
				<div>
					<label
						htmlFor="username"
						style={{ fontWeight: 700 }}
					>
						User ID
					</label>
					{/* <div /> */}
					<div className="login-input-box">
						<input
							id="login-input"
							type="text"
							name="username"
							required
							value={username}
							onChange={(event) =>
								setUsername(event.target.value)
							}
						/>
					</div>
				</div>
				<div>
					<label htmlFor="password">
						<p style={{ fontWeight: 700 }}>Password</p>
						<p>
							Must be at least 8 characters long and
							include one capital letter and one letter.
						</p>
					</label>
					<div className="login-input-box">
						<input
							id="login-input"
							type={passwordState}
							name="password"
							required
							value={password}
							onChange={(event) =>
								setPassword(event.target.value)
							}
						/>
						<p
							className="password-show link"
							id="show"
							onClick={showPassword}
						>
							Show
						</p>
					</div>
				</div>
				<div className="remember-user-id">
					<input
						type="checkbox"
						name="remember-user-id"
						id="remember-user-id"
					/>
					<label htmlFor="remember-user-id">
						Remember User ID
					</label>
				</div>
				<div>
					<PrimaryButton text="Log In" width="100%" />
				</div>
				<div className="forgot-link">
					<a className="link" href="#">
						Forgot User ID or Password?
					</a>
				</div>
			</form>
			
			<div>


				<form onSubmit={registration}>
					{/* These designed button need to be in a form to work */}
					<SecondaryButton
						text="New User?"
						width="100%"
						onClick={registration}
					/>
				</form>
			</div>
		</div>
	);
}
