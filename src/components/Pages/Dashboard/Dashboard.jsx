import { useState } from "react";
import LogOutButton from "../../Buttons/LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
	const history = useHistory();
	const { username, is_admin, emp_id } = useSelector(
		(store) => store.user
	);
	let admin;
	if (is_admin !== true) {
		admin = "False";
	} else {
		admin = "True";
	}

	let idMessage;
	if (emp_id === null) {
		idMessage =
			"Please see your admin to get this number updated";
	} else {
		idMessage = `${emp_id}`;
	}

	return (
		<main>
			<h1>{username}'s Dashboard</h1>
			<p className="largeText">
				Admin?: <span className="regularText">{admin}</span>
			</p>
			<p className="largeText">
				Employee ID:{" "}
				<span className="regularText">{idMessage}</span>
			</p>

			<button
				type="button"
				className="btn btn_asLink secondary-btn"
				// className="btn btn_asLink" 
				onClick={() => {
					history.push("/employees");
				}}
			>
				Employee Page
			</button>

			<button
				type="button"
				className="btn btn_asLink secondary-btn"
				// className="btn btn_asLink" 
				onClick={() => {
					history.push("/calc");
				}}
			>
				Tip Calc Page
			</button>


			<LogOutButton className="primary-btn" />
		</main>
	);
}
