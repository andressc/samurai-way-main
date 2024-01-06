import * as S from "./Button.styled"
import React, {FC, MouseEvent} from "react"

type ButtonPropsType = {
    title: string | number
    icon?: string
    className?: string
    onClick?: (page: number) => void
}
export const Button: FC<ButtonPropsType> = ({icon, title, onClick, className}) => {

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.textContent)
        if(onClick) onClick(e.currentTarget.textContent ? +e.currentTarget.textContent : 1)
    }


    return (
        <>
        <S.Button onClick={onClickHandler} className={className}>
            <S.ButtonTitle $icon={icon ? icon : ""} >{title}</S.ButtonTitle>
        </S.Button>
        </>
    )
}