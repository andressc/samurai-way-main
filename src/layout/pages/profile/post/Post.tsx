import React from "react"
import {ItemTitle} from "../../../../components/ItemTitle"
import { S } from "./Post_Styles"
import newsIcon from "../../../../assets/icons/news.svg"
import {Button} from "../../../../components/button/Button"

export const Post: React.FC = () => {
    return (
        <S.Post>
            <ItemTitle>My posts</ItemTitle>
            <S.FieldPost as="textarea" placeholder="your news..."/>
            <Button icon={newsIcon} title="publish post"/>
        </S.Post>
    )
}