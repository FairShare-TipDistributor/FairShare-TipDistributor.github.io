import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EmployeeInput({
	activeEmployees,
	setActiveEmployees,
	employee,
}) {
	const defaultCurrentEmployee = { id: 0, hours: 0 };
	const [currentEmployee, setCurrentEmployee] = useState(
		defaultCurrentEmployee
	);
	const employees = [
		{ id: 1, name: "Brendan" },
		{ id: 2, name: "Dave" },
		{ id: 3, name: "Joshua" },
		{ id: 4, name: "Mike" },
	];

	/**
	 * * If the store is populated use that to set clockedInEmployees
	 * TODO: While building, populate clockedInEmployees with employees array,
	 * TODO: Remove || once route is set up
	 */
	const clockedInEmployees =
		useSelector((store) => store.employees) || employees;

	console.log(
		"activeEmployees inside EmployeeInput:",
		activeEmployees
	);

	useEffect(() => {
		if (employee) {
			console.log("***********");
			console.log("***********");
			console.log("inside useEffect for EmployeeInput");
			console.log("employee id:", employee.id);
			console.log("employee hours:", employee.hours);
			console.log("***********");
			console.log("***********");
			setCurrentEmployee({
				...currentEmployee,
				id: employee.id,
				hours: employee.hours,
			});
		}
	}, []);

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
				setCurrentEmployee(defaultCurrentEmployee);
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

		if (activeEmployees.length > 0) {
			/**
			 * * If the currentEmployee is the end of the activeEmployees array,
			 * * render both the "Add More" and "Remove Employee" buttons
			 */
			if (
				activeEmployees[activeEmployees.length - 1] ===
				currentEmployee
			) {
				return (
					<>
						<AddMoreBtn />
						<RemoveEmployeeBtn />
					</>
				);
			} else {
				/**
				 * *If the current Employee is not at the end of the activeEmployees array,
				 * *render the "Remove Employee" button
				 */
				console.log(
					"activeEmployees inside EmployeeInput RenderButtons else if:",
					activeEmployees
				);
				return <RemoveEmployeeBtn />;
			}
		} else {
			/**
			 * * If activeEmployees does not have any thing added,
			 * * only render the "Add More" button
			 */
			return <AddMoreBtn />;
		}
	};

	console.log(
		"currentEmployee.id after useEffect:",
		currentEmployee.id
	);
	console.log(
		"currentEmployee.hours after useEffect:",
		currentEmployee.hours
	);

	return (
		<>
			<label htmlFor="employee-name">Employee Name: </label>
			<select
				name="employee-name"
				value={currentEmployee.id}
				onChange={addEmployeeId}
			>
				<option value={0} disabled>
					Select an Employee
				</option>
				{clockedInEmployees.map((e) => {
					console.log(
						"clockedInEmployee (e.name):",
						e.name
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
