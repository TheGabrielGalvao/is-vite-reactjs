import { TodoTemplate } from "../../../../components/templates/TodoTemplate"
import { Tasks } from "../../../organisms/Tasks"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux"
import { useToDo, actions } from "../../../../store/ducks/ToDo"
import { Footer } from "../../../organisms/Footer"

export const ToDo = () => {
    const { data } = useAppSelector(useToDo)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch((actions.get()))
    },[])

    return (
        <TodoTemplate>
            <Tasks data={data}/>
            <Footer data={data} />
        </TodoTemplate>
    )
}