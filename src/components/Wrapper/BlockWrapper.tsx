import React from "react"
import {ItemTitle} from "../ItemTitle/ItemTitle"
import {ContentBlock} from "../ContentBlock/ContentBlock"
import styled from "styled-components"
import {theme} from "../../styles/Theme"

type BlockWrapperPropsType = {
    title: string
    children: React.ReactNode
}

export const BlockWrapper: React.FC<BlockWrapperPropsType> = ({title, children}) => {
    return (
        <BlockWrapperStyled>
            <ContentBlock>
                <ItemTitle>{title}</ItemTitle>
            </ContentBlock>
            {children}
        </BlockWrapperStyled>
    )
}

const BlockWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.indentation.gap};
`