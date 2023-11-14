import { useEffect, useState } from "react";
import { PrimaryButton } from "../../Buttons/DesignedButtons";
import { useDispatch } from "react-redux";
// import additional components
import EmployeeInput from "./CalcPageComponents/EmployeeInputComponents/EmployeeInput";
import InputTipPool from "./CalcPageComponents/InputTipPool";

export default function CalcEntryPage() {
	const dispatch = useDispatch();
	const [activeEmployees, setActiveEmployees] = useState([]);
	const [totalTipPool, setTotalTipPool] = useState("");
	const calculations = "calculations will go here";

	useEffect(() => {
		dispatch({ type: "GET_CLOCKED_IN_EMPLOYEES" });
	}, []);

	const calculateTips = (e) => {
		e.preventDefault();
		console.log("Clicked on Calculate button");
		console.log("activeEmployees:", activeEmployees);
		console.log("totalTipPool:", totalTipPool);
		if (
			!isNaN(totalTipPool) &&
			totalTipPool !== 0 &&
			activeEmployees.length !== 0
		) {
			dispatch({
				type: "CALCULATE_EMPLOYEE_TIPS",
				payload: {
					totalTipPool: Number(totalTipPool),
					activeEmployees,
				},
			});
		}
	};

	return (
		<>
			<form>
				<h3>Equal Distribution Calculator</h3>
				<InputTipPool
					totalTipPool={totalTipPool}
					setTotalTipPool={setTotalTipPool}
				/>
				<h3>Employee Details</h3>
				<EmployeeInput
					activeEmployees={activeEmployees}
					setActiveEmployees={setActiveEmployees}
				/>
				{activeEmployees.map((employee) => {
					return (
						<EmployeeInput
							activeEmployees={activeEmployees}
							setActiveEmployees={setActiveEmployees}
						/>
					);
				})}
			</form>
			<PrimaryButton text="Calculate" func={calculateTips} />
			<h4>Results</h4>
			<h5>Tips per hour worked: </h5>
			<ul>{calculations}</ul>
		</>
	);
}
