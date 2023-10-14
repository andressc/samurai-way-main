import React from "react"
import {Posts} from "./posts/Posts"
import {PostForm} from "./post-form/PostForm"
import {ItemTitle} from "../../../../components/ItemTitle"
import {S} from "./PostWrapper_Styles"

export const PostWrapper: React.FC = () => {
    return (
        <S.PostWrapper>
            <ItemTitle>My posts</ItemTitle>
            <PostForm/>
            <Posts/>
        </S.PostWrapper>
    )
}