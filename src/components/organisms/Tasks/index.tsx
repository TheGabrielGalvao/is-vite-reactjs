import { Container } from './styles'
import { Task } from '../../molecules/Task'
import { IToDo } from '../../../interfaces/IToDo'
import { TaskForm } from '../../molecules/TaskForm'

interface Props {
  data: IToDo[]
}

export const Tasks = ({ data }: Props) => {
  return (
    <Container>
      <TaskForm />
      {data.length > 0 &&
        data.map((task) => <Task key={task.id} task={task} />)}
    </Container>
  )
}
