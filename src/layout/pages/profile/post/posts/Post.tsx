import React from "react"
import {S} from "./Posts_Styles"
import {FlexWrapper} from "../../../../../components/FlexWrapper"
import messageIcon from "../../../../../assets/icons/message.svg"
import heartIcon from "../../../../../assets/icons/heart.svg"
import shareIcon from "../../../../../assets/icons/share.svg"
import {Button} from "../../../../../components/button/Button"

type CommentPropType = {
    img: string
    comment: string
    userName: string
    date: string
}

export const Post: React.FC<CommentPropType> = (props) => {
    return (
        <S.Post>
            <FlexWrapper gap={15}>
                <img src={props.img} alt=""/>
                <FlexWrapper flexDirection="column">
                    <h4>{props.userName}</h4>
                    <span>{props.date}</span>
                </FlexWrapper>
            </FlexWrapper>
            <p>{props.comment}</p>
            <FlexWrapper justifyContent="flex-end" gap={15}>
                <Button icon={heartIcon} title="34"/>
                <Button icon={messageIcon} title="answer"/>
                <Button icon={shareIcon} title="share"/>
            </FlexWrapper>
        </S.Post>
    )
}