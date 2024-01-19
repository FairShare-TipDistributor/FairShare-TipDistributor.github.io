import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showHidePassword, setShowHidePassword] = useState(false);
	const errors = useSelector((store) => store.errors);
	const dispatch = useDispatch();

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
		<form className="formPanel" onSubmit={login}>
			<h2>Login</h2>
			{errors.loginMessage && (
				<h3 className="alert" role="alert">
					{errors.loginMessage}
				</h3>
			)}
			<div>
				<label htmlFor="username">User ID</label>
				<div />
				<div className="login-input-box">
					<input
						className="login-input"
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
					Password
					<div>
						Must be at least 8 characters long and include
						one capital letter and one letter.
					</div>
				</label>
				<div className="login-input-box">
					<input
						className="login-input"
						type={passwordState}
						name="password"
						id="password"
						required
						value={password}
						onChange={(event) =>
							setPassword(event.target.value)
						}
					/>
					<p
						className="password-show"
						id="show"
						onClick={showPassword}
					>
						Show
					</p>
				</div>
			</div>
			<div>
				<input
					className="btn"
					type="submit"
					name="submit"
					value="Log In"
				/>
			</div>
		</form>
	);
}
