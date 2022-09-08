import { AxiosResponse } from 'axios';
import api from "../api"
import { IToDo } from "../../interfaces/IToDo"

export const getTodos = async () => {
  try {
    const response = await api.get('to-do').then((response: AxiosResponse) => (response))

    return response
  }
  catch {
    return []
  }
}

export const deleteTodos = async (id: number) => {
  try {
    const response = await api.delete(`to-do/${id}`).then((response: AxiosResponse) => (response))

    return response
  } catch {
    return []
  }
}