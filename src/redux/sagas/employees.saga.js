import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getEmployees() {
    try {
        const employees = yield axios.get('/employeesRouter');
        yield put({ type: 'SET_EMPLOYEES', payload: employees.data});
        console.log(employees.data);
    } catch(error) {
        console.log(`error in getTips ${error}`);
        alert('Something went wrong');
    }
};


function* employeesSaga() {
    yield takeLatest('FETCH_EMPLOYEES', getEmployees);
    
};

export default employeesSaga();