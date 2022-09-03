import { useDispatch } from 'react-redux'
import { IToDoState } from './types'
import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch } from '../..'


const INITIAL_STATE: IToDoState = {
    data: [],
    error: false,
    loading: false
}

const toDoSlice = createSlice({
  name: "toDo",
  initialState: INITIAL_STATE,
  reducers: {
    get() {},
    getSuccess(state, action) {
      state.data = action.payload.toDos
    },
    getFailure(state, action) {
      state.data = action.payload.toDos
    },

    save(state, action) {
      state.data = action.payload.toDos
    },
    saveSuccess(state, action) {
      state.data = action.payload.toDos
    },
    saveFailure(state, action) {
      state.data = action.payload.toDos
    },

    remove(state, action) {
      state.data = action.payload.toDos
    },
    removeSuccess(state, action) {
      state.data = action.payload.toDos
    },
    removeFailure(state, action) {
      state.data = action.payload.toDos
    },
  },
})



export default toDoSlice.reducer
export const { ...actions }  = toDoSlice.actions

export const useToDo = (state: any) => {
  return state.toDo as IToDoState;
};
