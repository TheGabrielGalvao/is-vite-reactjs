import { resolveRequest } from './../../util/helper/httpHelper'
import { AxiosResponse } from 'axios'
import { getTodos, deleteTodos, saveTodos } from '../repository/todoRepository'
import { IToDo } from '../../interfaces/IToDo'

export const getAll = async () => {
  const response = await resolveRequest(async () => {
    const response: AxiosResponse = (await getTodos()) as AxiosResponse
    return response
  }, {} as AxiosResponse)

  return response
}

export const deleteTodoId = async (id: number) => {
  try {
    const response = await resolveRequest(async () => {
      const response: AxiosResponse = (await deleteTodos(id)) as AxiosResponse
      return response
    }, {} as AxiosResponse)

    return response
  } catch {
    return []
  }
}

export const saveTodo = async (data: IToDo) => {
  const response = await resolveRequest(async () => {
    const response: AxiosResponse = (await saveTodos(data)) as AxiosResponse
    return response
  }, {} as AxiosResponse)
  return response
}
