import * as S from "./Button.styled"
import React, {FC, MouseEvent} from "react"

type ButtonPropsType = {
    title: string | number
    icon?: string
    className?: string
    onClick?: (page: number) => void
    disabled?: boolean
}
export const Button: FC<ButtonPropsType> = ({icon, title, onClick, className, disabled}) => {

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if(onClick) onClick(e.currentTarget.textContent ? +e.currentTarget.textContent : 1)
    }


    return (
        <>
        <S.Button onClick={onClickHandler} className={className} disabled={disabled}>
            <S.ButtonTitle $icon={icon ? icon : ""} >{title}</S.ButtonTitle>
        </S.Button>
        </>
    )
}