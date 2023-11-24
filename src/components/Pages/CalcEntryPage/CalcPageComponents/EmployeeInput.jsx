import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EmployeeInput({
	activeEmployees,
	setActiveEmployees,
	employee,
}) {
	const defaultCurrentEmployee = { emp_id: 0, hours: 0 };
	const [currentEmployee, setCurrentEmployee] = useState(
		defaultCurrentEmployee
	);
	const clockedInEmployees = useSelector(
		(store) => store.employees
	);

	useEffect(() => {
		if (employee) {
			console.log("inside if(employee)");
			setCurrentEmployee({
				...currentEmployee,
				emp_id: employee.emp_id,
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
			emp_id: Number(selectedEmployeeId),
			selected: true,
		});
	};

	const addEmployeeHours = (e) => {
		e.preventDefault();
		const currentHours = e.target.value;
		setCurrentEmployee({
			...currentEmployee,
			hours: Number(currentHours),
		});
	};

	const RenderButtons = () => {
		const addMoreEmployees = (e) => {
			e.preventDefault();
			const employeeArray = [...activeEmployees];
			if (
				!employeeArray.includes(currentEmployee) &&
				currentEmployee.hours > 0 &&
				currentEmployee.emp_id !== 0
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

		const AddMoreBtn = () => (
			<button onClick={addMoreEmployees}>Add More</button>
		);

		const RemoveEmployeeBtn = () => (
			<button onClick={removeEmployee}>Remove Employee</button>
		);

		if (activeEmployees.length === 0) {
			// * If activeEmployees is empty, only include AddMoreBtn
			return <AddMoreBtn />;
		} else if (employee) {
			// * If activeEmployees is not empty and employee prop is passed down, include RemoveEmployeeBtn
			return <RemoveEmployeeBtn />;
		} else {
			// * If activeEmployees is not empty and no employee prop is passed down, only include AddMoreBtn
			return <AddMoreBtn />;
		}
	};

	const checkToDisable = (e) => {
		if (activeEmployees.length > 0) {
			// console.log("inside checkToDisable");
			// console.log("e.id inside checkToDisable", e.id);
			for (let activeE of activeEmployees) {
				// console.log("activeE.id inside forLoop", activeE.id);
				if (
					e.id === activeE.emp_id &&
					activeE.selected === true
				) {
					// console.log("e.id:", e.id);
					// console.log("e.selected:", e.selected);
					return true;
				}
			}
		}
		return false;
	};

	return (
		<>
			<label htmlFor="employee-name">Employee Name: </label>
			<select
				name="employee-name"
				value={currentEmployee.emp_id}
				onChange={addEmployeeId}
			>
				<option value={0} disabled>
					Select an Employee
				</option>
				{clockedInEmployees.map((e) => {
					return (
						<option
							key={e.id}
							value={e.id}
							disabled={checkToDisable(e)}
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
