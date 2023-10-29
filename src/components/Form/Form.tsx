import React, {ChangeEvent, FormEvent, useState} from "react"
import newsIcon from "../../assets/icons/news.svg"
import {Button} from "../Button/Button"
import * as S from "./Form.styled"
import {ActionType} from "../../redux/actionType"

type PropsType = {
    dispatch: (action: ActionType) => void
    actionCreator: (value: string) => ActionType
    buttonTitle: string
}

export const Form: React.FC<PropsType> = ({dispatch, actionCreator, buttonTitle}) => {

    const [newValue, setNewValue] = useState<string>("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        dispatch(actionCreator(newValue))
        setNewValue("")
    }

    return (
        <S.PostForm onSubmit={handleSubmit}>
            <S.PostFormField as="textarea" placeholder="your text..." value={newValue} onChange={changeHandler}/>
            <Button icon={newsIcon} title={buttonTitle} callBack={onClickHandler}/>
        </S.PostForm>
    )
}