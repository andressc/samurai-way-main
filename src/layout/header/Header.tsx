import React, {FC} from "react"
import * as S from "./Header.styled"

export const Header: FC = () => {

    return (
        <S.Header>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/2560px-Cyberpunk_2077_logo.svg.png"
                alt="logo"/>
        </S.Header>
    )
}