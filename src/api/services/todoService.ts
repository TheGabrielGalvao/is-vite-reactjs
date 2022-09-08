import { resolveRequest } from './../../util/helper/httpHelper';
import { AxiosResponse } from 'axios';
import { getTodos } from "../repository/todoRepository"

export const getAll = async () => {
    const response = await resolveRequest(
      async () => {
        const response: AxiosResponse = await getTodos() as AxiosResponse
        return response
      }, {} as AxiosResponse
    )

    return response
}