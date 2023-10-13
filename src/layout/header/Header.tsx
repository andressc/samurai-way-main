import React from "react"
import {S} from "./Header_Styles"

export const Header: React.FC = () => {
    return (
        <S.Header>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/2560px-Cyberpunk_2077_logo.svg.png"
                alt="logo"/>
        </S.Header>
    )
}