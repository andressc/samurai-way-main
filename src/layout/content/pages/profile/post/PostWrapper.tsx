import React from "react"
import {Posts} from "../../../../../components/Posts/Posts"
import {PostForm} from "./post-form/PostForm"
import * as S from "./PostWrapper.styled"
import {db} from "../../../../../db/db"

export const PostWrapper: React.FC = () => {
    return (
        <S.PostWrapper>
            <PostForm/>
            <Posts posts={db.posts}/>
        </S.PostWrapper>
    )
}