import { AxiosResponse } from 'axios'
import { IToDo } from '../../interfaces/IToDo'
import api from '../api'

export const getTodos = async () => {
  try {
    const response = await api
      .get('to-do')
      .then((response: AxiosResponse) => response)

    return response
  } catch {
    return []
  }
}

export const deleteTodos = async (id: number) => {
  try {
    const response = await api
      .delete(`to-do/${id}`)
      .then((response: AxiosResponse) => response)

    return response
  } catch {
    return []
  }
}

export const saveTodos = async (data: IToDo) => {
  try {
    const response = await api
      .post(`to-do`, data)
      .then((response: AxiosResponse) => response)

    return response
  } catch {
    return []
  }
}
