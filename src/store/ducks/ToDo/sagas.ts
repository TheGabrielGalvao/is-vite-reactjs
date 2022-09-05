import { put } from "@redux-saga/core/effects"
import { getAll } from "../../../api/services/todoService"
import { all, takeLatest } from 'redux-saga/effects'
import {actions} from "."

export function* getData() {
    try {
        const {data} = yield getAll()
        
        yield put(actions.getSuccess (data))
    }
    catch (ex) {
        yield put(actions.getFailure({
            error: true
        }))
        
    }
}



export function* todoSaga() {
    yield all([
        takeLatest(actions.get, getData),
    ])
}