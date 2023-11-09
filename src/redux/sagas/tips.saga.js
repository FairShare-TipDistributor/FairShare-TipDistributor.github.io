import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postTips(action) {
    try {
        yield axios.post('/tipsRouter', action.payload);
        console.log(action.payload);
        // yield put({ type: 'INSERT GET COMMAND ONCE MADE})
    } catch(error) {
        console.log(`error in postTips ${error}`);
        alert('Something went wrong');
    }
}

function* tipsSaga() {
    yield takeLatest('ADD_TIPS', postTips);

}

export default tipsSaga;