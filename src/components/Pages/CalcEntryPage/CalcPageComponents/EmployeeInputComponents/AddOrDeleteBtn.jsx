import { useState } from "react";

export default function AddOrDeleteBtn({
	activeEmployees,
	setActiveEmployees,
	currentEmployee,
}) {
	const [showAddOrDelete, setShowAddOrDelete] = useState("add");
	const addMoreEmployees = (e) => {
		e.preventDefault();
		const employeeArray = [...activeEmployees];
		if (
			!employeeArray.includes(currentEmployee) &&
			currentEmployee.hours > 0
		) {
			employeeArray.push(currentEmployee);
			setActiveEmployees(employeeArray);
			setShowAddOrDelete("delete");
		}
		console.log(activeEmployees);
	};

	const deleteEmployee = () => {
		const updatedEmployees = activeEmployees.filter(
			(employee) => employee.id !== currentEmployee.id
		);
		setActiveEmployees(updatedEmployees);
		setShowAddOrDelete("add");
	};

	if (showAddOrDelete === "add") {
		return <button onClick={addMoreEmployees}>Add More</button>;
	} else {
		return (
			<button onClick={deleteEmployee}>Delete Employee</button>
		);
	}
}
