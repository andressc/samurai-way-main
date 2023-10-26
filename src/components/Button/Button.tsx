import * as S from "./Button.styled"
import React from "react"

type ButtonPropsType = {
    icon: string
    title: string | number
    callBack?: () => void
}
export const Button: React.FC<ButtonPropsType> = ({icon, title, callBack}) => {

    const onClickHandler = () => {
        if(callBack) callBack()
    }

    return (
        <S.Button onClick={onClickHandler}>
            <S.ButtonTitle icon={icon}>{title}</S.ButtonTitle>
        </S.Button>
    )
}