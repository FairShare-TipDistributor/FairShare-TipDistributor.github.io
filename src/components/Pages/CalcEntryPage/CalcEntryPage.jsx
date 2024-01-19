import { useEffect, useState } from "react";
import { PrimaryButton } from "../../Buttons/DesignedButtons";
import { useDispatch, useSelector } from "react-redux";
// import additional components
import EmployeeInput from "./CalcPageComponents/EmployeeInput";
import InputTipPool from "./CalcPageComponents/InputTipPool";
import "./CalcEntryPage.css";

export default function CalcEntryPage() {
	const dispatch = useDispatch();
	const [activeEmployees, setActiveEmployees] = useState([]);
	const [totalTipPool, setTotalTipPool] = useState("");
	const calculations = useSelector((store) => store.tips);

	useEffect(() => {
		dispatch({ type: "FETCH_EMPLOYEES" });
	}, []);

	const calculateTips = (e) => {
		e.preventDefault();
		console.log("Clicked on Calculate button");
		// console.log("activeEmployees:", activeEmployees);
		// console.log("totalTipPool:", totalTipPool);
		if (
			!isNaN(totalTipPool) &&
			totalTipPool !== 0 &&
			activeEmployees.length !== 0
		) {
			dispatch({
				type: "ADD_TIPS",
				payload: {
					tipsTotal: Number(totalTipPool),
					employeeInfo: activeEmployees,
				},
			});
		}
	};

	return (
		<>
			<main>
				<form>
					<h3>Equal Distribution Calculator</h3>
					<InputTipPool
						totalTipPool={totalTipPool}
						setTotalTipPool={setTotalTipPool}
					/>
					<h3>Employee Details</h3>
					{activeEmployees.map((employee) => {
						return (
							<EmployeeInput
								activeEmployees={activeEmployees}
								setActiveEmployees={
									setActiveEmployees
								}
								employee={employee}
								key={employee.emp_id}
							/>
						);
					})}
					<div className="red-border">
						<EmployeeInput
							activeEmployees={activeEmployees}
							setActiveEmployees={setActiveEmployees}
						/>
					</div>

					<br />
				</form>
				<PrimaryButton
					text="Calculate"
					func={calculateTips}
				/>
				<h4>Results</h4>
				<h5>Tips per hour worked: </h5>
				<ul>
					{calculations.map((tip) => {
						return (
							<li key={tip.id}>
								emp_id: {tip.emp_id}, name: {tip.name}
								, date: {tip.date}, share_total: $
								{tip.share_total}
							</li>
						);
					})}
				</ul>
			</main>
		</>
	);
}
