import React, {useContext} from "react"
import * as S from "./Header.styled"
import {ThemeContext} from "../../App"

export const Header: React.FC = () => {

    const context = useContext(ThemeContext)

    return (
        <S.Header>
            {context}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/2560px-Cyberpunk_2077_logo.svg.png"
                alt="logo"/>
        </S.Header>
    )
}