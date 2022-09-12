import { AxiosResponse } from 'axios'
import { find } from 'lodash'
import {
  HTTP_STATUS_CODES,
  HTTP_RESPONSES,
} from './../constants/HTTP_RESPONSES'

export const findCustomHttpMessage = (status: HTTP_STATUS_CODES) => {
  const message =
    find(HTTP_RESPONSES, { code: status })?.message ??
    `Status Desconhecido: ${status}`
  return message
}

export const setCustomHttpMessage = (response: AxiosResponse) => {
  const customResponse = response
  customResponse.statusText = findCustomHttpMessage(response.status)
  return customResponse
}

export const resolveRequest = async (
  method?: () => {},
  defaultReturn?: AxiosResponse,
) => {
  try {
    if (!method || typeof method !== 'function') {
      return defaultReturn
    }

    const result = (await method()) as AxiosResponse
    const customResponse = setCustomHttpMessage(result) as AxiosResponse
    return customResponse
  } catch {
    return defaultReturn
  }
}
