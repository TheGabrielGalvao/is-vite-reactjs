import { put } from '@redux-saga/core/effects'
import {
  getAll,
  deleteTodoId,
  saveTodo,
} from '../../../api/services/todoService'
import { all, takeLatest } from 'redux-saga/effects'
import { actions } from '.'
import { AxiosResponse } from 'axios'

export function* getData() {
  try {
    const { data } = yield getAll()

    yield put(actions.getSuccess(data))
  } catch (ex) {
    yield put(
      actions.getFailure({
        error: true,
      }),
    )
  }
}

export function* deleteData(action?: any) {
  try {
    const { data } = action
      ? yield deleteTodoId(action.payload.id)
      : ({} as AxiosResponse)

    if (data) {
      yield put(actions.removeSuccess(data))
      getData()
    }
  } catch (ex) {
    yield put(
      actions.removeFailure({
        error: true,
      }),
    )
  }
}

export function* saveData(action?: any) {
  try {
    const { data } = action?.payload
      ? yield saveTodo(action?.payload)
      : ({} as AxiosResponse)

    if (data) {
      yield put(actions.saveSuccess(data))
      getData()
    }
  } catch (ex) {
    yield put(
      actions.removeFailure({
        error: true,
      }),
    )
  }
}

export function* todoSaga() {
  yield all([
    takeLatest(actions.get, getData),
    takeLatest(actions.remove, deleteData),
    takeLatest(actions.save, saveData),
  ])
}
