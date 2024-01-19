import { useState } from "react";
import LogOutButton from "../../Buttons/LogOutButton/LogOutButton";
import { useSelector } from "react-redux";

export default function Dashboard() {
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

			<LogOutButton className="primary-btn" />
		</main>
	);
}
