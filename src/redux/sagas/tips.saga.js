import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* postTips(action) {
	try {
		yield axios.post("/tips", action.payload);
		console.log(action.payload);
		yield put({ type: "FETCH_TIPS" });
	} catch (error) {
		console.log(`error in postTips ${error}`);
		alert("Something went wrong");
	}
}

function* getTips() {
	try {
		const tips = yield axios.get("/tips");
		yield put({ type: "SET_TIPS", payload: tips.data });
		console.log(tips.data);
	} catch (error) {
		console.log(`error in getTips ${error}`);
		alert("Something went wrong");
	}
}

function* tipsSaga() {
	yield takeLatest("ADD_TIPS", postTips);
	yield takeLatest("FETCH_TIPS", getTips);
}

export default tipsSaga;
