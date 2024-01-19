import { all } from "redux-saga/effects";
import tipsSaga from "./tips.saga";
import employeesSaga from "./employees.saga";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

export default function* rootSaga() {
	yield all([
		loginSaga(),
		registrationSaga(),
		userSaga(),
		tipsSaga(),
		employeesSaga(),
	]);
}
