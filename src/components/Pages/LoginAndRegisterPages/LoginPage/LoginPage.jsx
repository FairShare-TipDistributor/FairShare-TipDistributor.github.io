import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { useHistory } from "react-router-dom";

import "../LoginAndRegister.css";

// This page is basically the right side of the landing page.
// TECHNICALLY this page is JUST the login form, and the "New User" button.
// And also has the "Register" button that WORKS.

	// it is not yet clear if this should be used for the landing page login or not yet.

function LoginPage() {
	const history = useHistory();

	return (
		<div>
			<LoginForm />

			{/* <center>
				<button
					type="button"
					className="btn btn_asLink"
					onClick={() => {
						history.push("/registration");
					}}
				>
					Register
				</button>
			</center> */}
		</div>
	);
}

export default LoginPage;
