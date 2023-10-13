import React from "react"
import {ItemTitle} from "../../../../components/ItemTitle"
import {Button} from "../../../../components/Button"
import { S } from "./Post_Styles"

export const Post: React.FC = () => {
    return (
        <S.Post>
            <ItemTitle>My posts</ItemTitle>
            <S.FieldPost as="textarea" placeholder="your news..."/>
            <Button>Send Message</Button>
        </S.Post>
    )
}