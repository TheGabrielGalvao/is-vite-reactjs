import { IToDo } from "interfaces/IToDo"


export interface IToDoState {
    data: IToDo[]
    loading?: boolean
    error?: boolean
}