import React from "react"
import messageIcon from "../../assets/icons/message.svg"
import heartIcon from "../../assets/icons/heart.svg"
import shareIcon from "../../assets/icons/share.svg"
import {Button} from "../Button/Button"
import {SimpleCell} from "../SimpleCell/SimpleCell"
import {ButtonBar} from "../ButtonBar/ButtonBar"
import {ContentBlock} from "../ContentBlock/ContentBlock"
import {FlexWrapper} from "../Wrapper/FlexWrapper"
import {Views} from "../Views/Views"

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
        <ContentBlock>
            <FlexWrapper justify="space-between">
                <SimpleCell image={post.userImg} title={post.userName} subtitle={post.date}/>
                <Views>{post.views}</Views>
            </FlexWrapper>
            <p>{post.comment}</p>
            <ButtonBar>
                <Button icon={heartIcon} title={post.likes}/>
                <Button icon={messageIcon} title="answer"/>
                <Button icon={shareIcon} title="share"/>
            </ButtonBar>
        </ContentBlock>
    )
}