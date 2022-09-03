import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
     // reducer label: reducer
  },
  middleware: (applyMiddleware) => (applyMiddleware().concat(sagaMiddleware))
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

