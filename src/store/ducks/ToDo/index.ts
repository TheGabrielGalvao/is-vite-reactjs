import { createSlice } from '@reduxjs/toolkit'
import { IToDoState } from './types'
import { RootState } from '../../'

const INITIAL_STATE: IToDoState = {
  data: [],
  error: false,
  loading: false,
}

const toDoSlice = createSlice({
  name: 'toDoReducer',
  initialState: INITIAL_STATE,
  reducers: {
    get() { },
    getSuccess(state, action) {
      state.data = action.payload
    },
    getFailure(state, action) {
      state.data = action.payload.toDos
    },

    save(state, action) {
      state.data.push(action.payload)
    },
    saveSuccess(state, action) {
      state.data = action.payload.toDos
    },
    saveFailure(state, action) {
      state.data = action.payload.toDos
    },

    remove(state, action) {
      // state.data = state.data.((todo) => todo.id !== action.payload.id)
      state.loading = true
    },
    removeSuccess(state, action) {
      state.data = action.payload
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
