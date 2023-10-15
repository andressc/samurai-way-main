import React from "react"
import {S} from "./News_Styles"
import {Posts} from "../../../components/Posts/Posts"
import {ItemTitle} from "../../../components/ItemTitle/ItemTitle"
import {db} from "../../../db/db"

export const News: React.FC = () => {
    return (
        <S.News>
            <ItemTitle>My News</ItemTitle>
            <Posts posts={db.posts}/>
        </S.News>
    )
}