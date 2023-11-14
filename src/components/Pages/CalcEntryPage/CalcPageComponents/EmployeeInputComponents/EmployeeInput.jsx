import { useState } from "react";
import { useSelector } from "react-redux";
import AddOrDeleteBtn from "./AddOrDeleteBtn";

export default function EmployeeInput({
	activeEmployees,
	setActiveEmployees,
}) {
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
	const [clockedInEmployees, setClockedInEmployees] = useSelector(
		(store) => store.employees
	) || [employees];

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
					return (
						<option
							key={e.id}
							value={e.id}
							disabled={activeEmployees.some(
								(employee) => employee.id === e.id
							)}
						>
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
				name="employee-hours-worked"
				id="employee-hours-worked"
				onChange={addEmployeeHours}
			/>
			<br />
			<AddOrDeleteBtn
				activeEmployees={activeEmployees}
				setActiveEmployees={setActiveEmployees}
				currentEmployee={currentEmployee}
			/>
			<br />
		</>
	);
}
