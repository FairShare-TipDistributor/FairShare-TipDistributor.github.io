import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const errors = useSelector((store) => store.errors);
	const dispatch = useDispatch();

	const registerUser = (event) => {
		event.preventDefault();
		const newUser = {
			username: username,
			password: password,
			email: email,
		};

		dispatch({
			type: "REGISTER",
			payload: newUser,
		});
	}; // end registerUser

	return (
		<form className="formPanel" onSubmit={registerUser}>
			<h2>Register User</h2>
			{errors.registrationMessage && (
				<h3 className="alert" role="alert">
					{errors.registrationMessage}
				</h3>
			)}
			<center>
				<div
				>
					<label
					style={{ fontWeight: 700 }}
					
					htmlFor="email">
						Email:
						<div className="login-input-box">
							<input
								id="login-input"
								type="email"
								name="email"
								value={email}
								required
								onChange={(event) =>
									setEmail(event.target.value)
								}
							/>
						</div>
					</label>
				</div>
				<div>
					<label htmlFor="username">
						Username:
					</label>
						<div className="login-input-box">
							<input
								id="login-input"
								type="text"
								name="username"
								value={username}
								required
								onChange={(event) =>
									setUsername(event.target.value)
								}
								/>
						</div>
				</div>
				<div>
					<label htmlFor="password">
						Password:
						<div className="login-input-box">
							<input
								id="login-input"
								type="password"
								name="password"
								value={password}
								required
								onChange={(event) =>
									setPassword(event.target.value)
								}
							/>
							</div>
					</label>
				</div>
				<div>
					<input
						className="btn btn primary-btn"
						type="submit"
						name="submit"
						value="Register"
					/>
				</div>
			</center>
		</form>
	);
}

export default RegisterForm;
