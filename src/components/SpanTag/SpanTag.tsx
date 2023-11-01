import React from "react"
import * as S from "./SpanTag.styled"
import {TextColorType} from "./SpanTag.styled"

export type PropsType = {
    textColor: TextColorType
    text: string
}

export const SpanTag: React.FC<PropsType> = ({textColor, text}) => {
    return (
        <S.SpanTag textColor={textColor}>{text}</S.SpanTag>
    )
}
