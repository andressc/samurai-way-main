import React from "react"
import * as C from "../Styled/Components"
import * as S from "./BlockWrapper.styled"

type BlockWrapperPropsType = {
    title: string
    children: React.ReactNode
}

export const BlockWrapper: React.FC<BlockWrapperPropsType> = ({title, children}) => {
    return (
        <S.BlockWrapper>
            <C.ContentBlock>
                <C.ItemTitle>{title}</C.ItemTitle>
            </C.ContentBlock>
            {children}
            <button></button>
        </S.BlockWrapper>
    )
}