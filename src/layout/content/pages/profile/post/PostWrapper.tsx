import React from "react"
import {Posts} from "../../../../../components/Posts/Posts"
import {PostForm} from "./post-form/PostForm"
import * as S from "./PostWrapper.styled"
import {PostType} from "../../../../../components/Posts/Post"

type PropsType = {
    posts: PostType[]
    callBack: (userText: string) => void
}
export const PostWrapper: React.FC<PropsType> = ({posts, callBack}) => {
    return (
        <S.PostWrapper>
            <PostForm callBack={callBack}/>
            <Posts posts={posts}/>
        </S.PostWrapper>
    )
}