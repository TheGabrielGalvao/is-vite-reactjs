import { resolveRequest } from './../../util/helper/httpHelper';
import { AxiosResponse } from 'axios';
import { getTodos, deleteTodos } from "../repository/todoRepository"

export const getAll = async () => {
  const response = await resolveRequest(
    async () => {
      const response: AxiosResponse = await getTodos() as AxiosResponse
      return response
    }, {} as AxiosResponse
  )

  return response
}


export const deleteTodoId = async (id: number) => {
  try {
    const response = await resolveRequest(
      async () => {
        const response: AxiosResponse = await deleteTodos(id) as AxiosResponse
        return response
      }, {} as AxiosResponse
    )

    console.log(response)
    return response

  }
  catch {
    return []
  }
}