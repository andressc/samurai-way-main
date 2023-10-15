import React from "react"
import {S} from "./News_Styles"
import {Posts} from "../../../components/Posts/Posts"
import {ItemTitle} from "../../../components/ItemTitle"

export const News: React.FC = () => {
    return (
        <S.News>
            <ItemTitle>My News</ItemTitle>
            <Posts/>
        </S.News>
    )
}