import { useState } from "react";
import { useSelector } from "react-redux";

export default function EmployeeInput({
	activeEmployees,
	setActiveEmployees,
}) {
	console.log(
		"activeEmployees inside EmployeeInput:",
		activeEmployees
	);
	const [currentEmployee, setCurrentEmployee] = useState({
		id: 0,
		hours: 0,
	});

	const employees = [
		{ id: 1, name: "Brendan" },
		{ id: 2, name: "Dave" },
		{ id: 3, name: "Joshua" },
		{ id: 4, name: "Mike" },
	];
	// If the store is populated use that to set clockedInEmployees
	//TODO: While building, populate clockedInEmployees with employees array, Remove || once route is set up
	const clockedInEmployees =
		useSelector((store) => store.employees) || employees;

	const addEmployeeId = (e) => {
		e.preventDefault();
		const selectedEmployeeId = e.target.value;
		console.log(`You selected ${selectedEmployeeId}`);
		setCurrentEmployee({
			...currentEmployee,
			id: selectedEmployeeId,
		});
	};

	const addEmployeeHours = (e) => {
		e.preventDefault();
		const currentHours = e.target.value;
		setCurrentEmployee({
			...currentEmployee,
			hours: currentHours,
		});
	};

	const RenderButtons = () => {
		const addMoreEmployees = (e) => {
			e.preventDefault();
			const employeeArray = [...activeEmployees];
			if (
				!employeeArray.includes(currentEmployee) &&
				currentEmployee.hours > 0
			) {
				employeeArray.push(currentEmployee);
				setActiveEmployees(employeeArray);
			}
			console.log(activeEmployees);
		};

		const removeEmployee = () => {
			const updatedEmployees = activeEmployees.filter(
				(employee) => employee.id !== currentEmployee.id
			);
			setActiveEmployees(updatedEmployees);
		};

		const AddMoreBtn = () => {
			return (
				<button onClick={addMoreEmployees}>Add More</button>
			);
		};

		const RemoveEmployeeBtn = () => (
			<button onClick={removeEmployee}>Remove Employee</button>
		);

		// If the currentEmployee is the end of the activeEmployees array,
		// render both the "Add More" and "Remove Employee" buttons
		if (activeEmployees)
			if (
				activeEmployees[0] &&
				activeEmployees[activeEmployees.length - 1] ===
					currentEmployee
			) {
				return (
					<>
						<AddMoreBtn />
						<RemoveEmployeeBtn />
					</>
				);
			}
			// If the current Employee is not at the end of the activeEmployees array,
			// render the "Remove Employee" button
			else if (
				activeEmployees[activeEmployees.length - 1] !==
					currentEmployee &&
				activeEmployees.length >= 1
			) {
				console.log(
					"activeEmployees inside EmployeeInput RenderButtons else if:",
					activeEmployees
				);
				return <RemoveEmployeeBtn />;
			}
			// If activeEmployees does not have any thing added,
			// only render the "Add More" button
			else {
				return <AddMoreBtn />;
			}
	};

	return (
		<>
			<label htmlFor="employee-name">Employee Name: </label>
			<select
				name="employee-name"
				defaultValue={"select-an-employee"}
				onChange={addEmployeeId}
			>
				<option value="select-an-employee" disabled>
					Select an Employee
				</option>
				{clockedInEmployees.map((e) => {
					console.log(
						"clockedInEmployees:",
						clockedInEmployees
					);
					return (
						<option key={e.id} value={e.id}>
							{e.name}
						</option>
					);
				})}
			</select>
			<br />
			<label htmlFor="employee-hours-worked">
				Hours Worked:{" "}
			</label>
			<input
				type="number"
				value={currentEmployee.hours}
				name="employee-hours-worked"
				id="employee-hours-worked"
				onChange={addEmployeeHours}
			/>
			<br />
			<RenderButtons />
			<br />
		</>
	);
}
