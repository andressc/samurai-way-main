import React from "react"
import {Information} from "./information/Information"
import { S } from "./About_Styles"

export const About: React.FC = () => {
    return (
        <S.About>
            <img src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png" alt="avatar"/>
            <div>
                <S.UserName>Andrey R.</S.UserName>
                <Information/>
            </div>
        </S.About>
    )
}