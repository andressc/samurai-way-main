import React from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import * as S from "./NotFound.styled"

export const NotFound: React.FC = () => {
    return (
        <BlockWrapper title="Not Found">
            <S.NotFoundContainer>
                <S.BigFont>404</S.BigFont>
                <span>Page not found</span>
            </S.NotFoundContainer>
        </BlockWrapper>
    )
}