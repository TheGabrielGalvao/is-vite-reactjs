import { IToDo } from "../../../interfaces/IToDo"
import { Container } from "./styles"
  
  interface Props {
    data?: IToDo[]
  }
  
  export const Footer = ({data}: Props) => {
    return(
        <Container>
          <h6>
            Total de tarefas:
            <span>{data?.length ?? 0}</span>
          </h6>

          <h6>
            Total de tarefas concluidas:
            <span>{0}</span>
          </h6>
        </Container>
    )
}