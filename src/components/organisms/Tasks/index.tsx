import { Container } from './styles'
import { Task } from '../../molecules/Task'
import { IToDo } from 'interfaces/IToDo'

interface Props {
  data: IToDo[]
}

export const Tasks = ({ data }: Props) => {
  // const stateTasks = useMemo(() => {
  //   if(tasks.length === 0) {
  //     return 'empty'
  //   } else if (!tasks.some(task => isVisibleTask(task))) {
  //     return 'search-empty'
  //   }

  //   return 'default'

  // }, [tasks, searchTaskName])

  // if(stateTasks === 'empty') {
  //   return <BoxAlert type={stateTasks} />
  // }

  // if(stateTasks === 'search-empty') {
  //   return <BoxAlert type="warning" />
  // }

  return (
    <Container>
      {data.length > 0 && data.map((task) => <Task task={task} />)}
    </Container>
  )
}
