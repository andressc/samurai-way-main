import React from "react"
import {S} from "./Content_Styles"
import {InformationContainer} from "./information/InformationContainer"
import {ItemTitle} from "../../../components/ItemTitle"
import {PostButton} from "../../../components/PostButton"
import {Comments} from "./comments/Comments"

export const Content: React.FC = () => {
    return (
        <S.Content>
            <img
                src="https://cs8.pikabu.ru/post_img/big/2018/02/06/12/151794761518266918.jpg"
                alt="cover"/>
            <S.AboutContainer>
                <img src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png" alt="avatar"/>
                <div>
                    <S.UserName>Andrey R.</S.UserName>
                    <InformationContainer/>
                </div>
            </S.AboutContainer>
            <S.MyPostContainer>
                <ItemTitle>My posts</ItemTitle>
                <S.FieldPost as="textarea" placeholder="your news..."/>
                <PostButton>Send</PostButton>
                <Comments/>
            </S.MyPostContainer>
        </S.Content>
    )
}