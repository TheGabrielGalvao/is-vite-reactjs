import { getTodos } from "../repository/todoRepository"
import { IToDo } from "interfaces/IToDo"

export const getAll = async () => {
    try {
        const response: IToDo[] = await getTodos()
          
        return response
      }
      catch {
        return []
      }
}