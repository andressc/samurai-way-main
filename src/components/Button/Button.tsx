import * as S from "./Button.styled"
import React from "react"

type ButtonPropsType = {
    icon: string
    title: string | number
    onClick?: () => void
}
export const Button: React.FC<ButtonPropsType> = ({icon, title, onClick}) => {

    const onClickHandler = () => {
        if(onClick) onClick()
    }

    return (
        <S.Button onClick={onClickHandler}>
            <S.ButtonTitle icon={icon}>{title}</S.ButtonTitle>
        </S.Button>
    )
}