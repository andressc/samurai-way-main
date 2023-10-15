import {S} from "./Button_Styles"
import React from "react"

type ButtonPropsType = {
    icon: string
    title: string
}
export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <S.Button>
            <S.ButtonTitle icon={props.icon}>{props.title}</S.ButtonTitle>
        </S.Button>
    )
}