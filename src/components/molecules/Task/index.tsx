import { IToDo } from '../../../interfaces/IToDo'
import { FaTrashAlt } from 'react-icons/fa'
import { Container } from './styles'
import {CustomInput} from '../../atoms/Input'

interface TaskProps {
    task?: IToDo
}

export function Task({task} : TaskProps) {
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
            // onClick={() => onRemove(id)}
        >
            <FaTrashAlt size={16} />
        </button>
    </Container>
  )
}