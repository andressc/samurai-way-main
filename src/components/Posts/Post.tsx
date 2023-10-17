import React from "react"
import messageIcon from "../../assets/icons/message.svg"
import heartIcon from "../../assets/icons/heart.svg"
import shareIcon from "../../assets/icons/share.svg"
import {Button} from "../Button/Button"
import {SimpleCell} from "../SimpleCell/SimpleCell"
import {ButtonBar} from "../ButtonBar/ButtonBar"
import * as C from "../Styled/Components"

export type PostType = {
    id: number
    userImg: string
    comment: string
    userId: number
    userName: string
    date: string
    likes: number
    views: number
}

type PostPropsType = {
    post: PostType
}

export const Post: React.FC<PostPropsType> = ({post}) => {

    return (
        <C.ContentBlock>
            <C.FlexWrapper justify="space-between">
                <SimpleCell image={post.userImg} title={post.userName} subtitle={post.date}/>
                <C.Views>{post.views}</C.Views>
            </C.FlexWrapper>
            <p>{post.comment}</p>
            <ButtonBar>
                <Button icon={heartIcon} title={post.likes}/>
                <Button icon={messageIcon} title="answer"/>
                <Button icon={shareIcon} title="share"/>
            </ButtonBar>
        </C.ContentBlock>
    )
}