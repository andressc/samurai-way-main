import React from "react"
import { S } from "./Posts_Styles"

type CommentPropType = {
    img: string
    comment: string
}

export const Post: React.FC<CommentPropType> = (props) => {
    return (
        <S.Post>
            <img src={props.img} alt=""/>
            <p>{props.comment}</p>
        </S.Post>
    )
}