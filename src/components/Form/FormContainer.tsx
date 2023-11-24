import React, {useContext} from "react"
import {ActionType} from "../../redux/actionType"
import {Form} from "./Form"
import {StoreContext} from "../../StoreContext"

type PropsType = {
    actionCreator: (value: string) => ActionType
    buttonTitle: string
}

export const FormContainer: React.FC<PropsType> = ({actionCreator, buttonTitle}) => {

    const context = useContext(StoreContext)

    const addNew = (newValue: string) => {
        context.dispatch(actionCreator(newValue))
    }

    return (
        <Form callback={addNew} buttonTitle={buttonTitle}/>
    )
}