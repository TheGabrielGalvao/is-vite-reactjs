import { Containerform } from './styles'
import { actions } from '../../../store/ducks/ToDo'
import { useAppDispatch } from '../../../hooks/useRedux'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IToDo } from '../../../interfaces/IToDo'

export function TaskForm() {
    const [taskName, setTaskName] = useState('')
    const dispatch = useAppDispatch()

    const handleSubmit = () => {
        const task: IToDo = {
            id: uuidv4(),
            name: taskName,
            completed: false,
        }

        dispatch(actions.save(task))

        setTaskName('')
    }

    return (
        <Containerform>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={() => dispatch(handleSubmit)}>Save</button>
        </Containerform>
    )
}
