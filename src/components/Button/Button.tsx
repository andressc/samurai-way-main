import * as S from "./Button.styled"
import React from "react"

type ButtonPropsType = {
    icon: string
    title: string | number
}
export const Button: React.FC<ButtonPropsType> = ({icon, title}) => {
    return (
        <S.Button>
            <S.ButtonTitle icon={icon}>{title}</S.ButtonTitle>
        </S.Button>
    )
}