import React from "react";

import { useHistory } from "react-router-dom";
import RegisterForm from "./RegisterForm/RegisterForm";

import "../LoginAndRegister.css";

function RegisterPage() {
	const history = useHistory();
	// const LoginPage = (event) => {
	// 	console.log('Login btn on registration page clicked');
	// 	history.push("/login");
	// };

	return (
		<div>
			
			{/* This is the actual Registration form is added */}
			<RegisterForm />

			<center>
				<button
					type="button"
					className="btn btn_asLink secondary-btn"
					// className="btn btn_asLink" 
					onClick={() => {
						history.push("/login");
					}}
				>
					Login
				</button>




				{/* These designed button need to be in a form to work */}
				{/* <form onSubmit={LoginPage}>
					<SecondaryButton
						text="New User?"
						width="100%"
						onClick={LoginPage}
					/>
				</form> */}

			</center>
		</div>
	);
}

export default RegisterPage;
