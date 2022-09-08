import { IToDo } from '../../../interfaces/IToDo'
import { FaTrashAlt } from 'react-icons/fa'
import { Container } from './styles'
import { CustomInput } from '../../atoms/Input'
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux'
import { actions, useToDo } from '../../../store/ducks/ToDo'

interface TaskProps {
    task?: IToDo
}


export function Task({ task }: TaskProps) {

    const { data } = useAppSelector(useToDo)

    const dispatch = useAppDispatch()

    const handleDelete = () => {
        dispatch(actions.remove({ id: task?.id }))
        dispatch(actions.get())
    }

    return (
        <Container>
            <CustomInput
                type="checkbox"
                checked={false}
                className='task__checkbox'
            // onChange={e => onChangeCompleted(id)}
            />

            <span>
                {task?.name}
            </span>

            <button
                type="button"
                onClick={handleDelete}
            >
                <FaTrashAlt size={16} />
            </button>
        </Container>
    )
}

