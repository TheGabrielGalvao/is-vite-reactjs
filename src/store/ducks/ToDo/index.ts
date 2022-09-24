import { createSlice } from '@reduxjs/toolkit'
import { IToDoState } from './types'
import { RootState } from '../../'
import { filter, find, remove } from 'lodash'

const INITIAL_STATE: IToDoState = {
  data: [],
  error: false,
  loading: false,
}

const toDoSlice = createSlice({
  name: 'toDoReducer',
  initialState: INITIAL_STATE,
  reducers: {
    get() {},
    getSuccess(state, action) {
      state.data = action.payload
    },
    getFailure(state, action) {
      state.data = action.payload.toDos
    },

    save(state, action) {
      state.loading = true
    },
    saveSuccess(state, action) {
      const task = action.payload
      state.data = [...state.data, task]
      state.loading = false
      state.error = false
    },
    saveFailure(state, action) {
      state.error = true
      state.loading = false
    },

    remove(state, action) {
      state.loading = true
    },
    removeSuccess(state, action) {
      // state.data = find(state.data, (x) => {
      //   return x.id !== action.payload
      // })
      state.loading = false
    },
    removeFailure(state, action) {
      state.loading = false
      state.error = true
    },
  },
})

export default toDoSlice.reducer
export const { ...actions } = toDoSlice.actions

export const useToDo = (state: RootState) => {
  return state.todo as IToDoState
}
