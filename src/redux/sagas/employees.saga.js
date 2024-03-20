import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getEmployees(action) {
	try {
		const employees = yield axios.get(`/employees/${action.payload.searchInput}`);
		// console.log('action.payload.searchInput:', action.payload.searchInput);		
		yield put({ type: "SET_EMPLOYEES", payload: employees.data });
		// console.log('employees.data (SAGA)', employees.data);
	} catch (error) {
		console.log(`error in 'GetEmployees' (SAGA) ${error}`);
		alert("Something went wrong");
	}
}


function* getAllEmployees(action) {
		try {
		const employees = yield axios.get(`/employees/-searchAll-`);		
		yield put({ type: "SET_EMPLOYEES", payload: employees.data });
		// console.log('employees.data (SAGA)', employees.data);
	} catch (error) {
		console.log(`error in 'getAllEmployees' (SAGA) ${error}`);
		alert("Something went wrong");
	}
}




function* addEmployee(action) {
	try {
		// const employee = yield axios.post("/employees");
		yield axios.post("/employees", action.payload);
		// yield put ({ type: 'FETCH_EMPLOYEES'});
		yield put ({ type: 'FETCH_ALL_EMPLOYEES'});
		// console.log('action.payload (Add SAGA)', action.payload);
	} catch (error) {
		console.log(`error in 'AddEmployee' (SAGA) ${error}`);
		console.log(`error, action.payload: ${action.payload}`);
		alert("Something went wrong");
	}
}

function* employeesSaga() {
	yield takeLatest("FETCH_ALL_EMPLOYEES", getAllEmployees);
	yield takeLatest("FETCH_EMPLOYEES", getEmployees);
	yield takeLatest("ADD_EMPLOYEE", addEmployee);
}
export default employeesSaga;
