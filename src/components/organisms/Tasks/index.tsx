import {Container} from './styles'
import { IToDo } from 'interfaces/IToDo'
import { Task } from '../../../components/molecules/Task'

interface Props {
  data: IToDo[]
}

export const Tasks = ({data}: Props) => {

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
      {data && data.map(task => (
        <Task task={task} />
      ))}
    </Container>    
  )
}
