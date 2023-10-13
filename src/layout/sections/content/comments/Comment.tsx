import React from "react"
import {S} from "../Content_Styles"

type CommentPropType = {
    img: string
    comment: string
}

export const Comment: React.FC<CommentPropType> = (props) => {
    return (
        <S.Comment>
            <img src={props.img} alt=""/>
            <p>{props.comment}</p>
        </S.Comment>
    )
}