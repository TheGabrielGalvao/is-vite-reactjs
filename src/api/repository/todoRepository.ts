import api from "../api"
import { IToDo } from "../../interfaces/IToDo"

export const getTodos = async () => {
    try {
        const response: IToDo[] = await api.get('to-do')
        
        return response
      }
      catch {
        return []
      }
}