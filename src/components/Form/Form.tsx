import React, {ChangeEvent, FormEvent, useState} from "react"
import newsIcon from "../../assets/icons/news.svg"
import {Button} from "../Button/Button"
import * as S from "./Form.styled"

type PropsType = {
    buttonTitle: string
    callback: (value: string) => void
}

export const Form: React.FC<PropsType> = ({callback, buttonTitle}) => {

    const [newValue, setNewValue] = useState<string>("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        callback(newValue)
        setNewValue("")
    }

    return (
        <S.PostForm onSubmit={handleSubmit}>
            <S.PostFormField as="textarea" placeholder="your text..." value={newValue} onChange={changeHandler}/>
            <Button icon={newsIcon} title={buttonTitle} onClick={onClickHandler}/>
        </S.PostForm>
    )
}