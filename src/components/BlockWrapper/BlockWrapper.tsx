import React, {FC, ReactNode} from "react"
import * as C from "../Styled/Components"
import * as S from "./BlockWrapper.styled"

type BlockWrapperPropsType = {
    title: string
    children: ReactNode
}

export const BlockWrapper: FC<BlockWrapperPropsType> = ({title, children}) => {
    return (
        <S.BlockWrapper>
            <C.ContentBlock>
                <C.ItemTitle>{title}</C.ItemTitle>
            </C.ContentBlock>
            {children}
        </S.BlockWrapper>
    )
}