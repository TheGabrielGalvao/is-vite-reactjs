import { all, fork } from 'redux-saga/effects'
import { todoSaga } from './ducks/ToDo/sagas'

export default function* rootSaga() {
    yield all([
        fork(todoSaga),
    ])
}
