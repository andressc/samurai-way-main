import React from "react"
import {Posts} from "../../../../../components/Posts/Posts"
import {Form} from "../../../../../components/Form/Form"
import * as S from "./PostWrapper.styled"
import {PostType} from "../../../../../components/Posts/Post"
import {addPostAC} from "../../../../../redux/posts-reducer"
import {ActionType} from "../../../../../redux/actionType"

type PropsType = {
    posts: PostType[]
    dispatch: (action: ActionType) => void
}
export const PostWrapper: React.FC<PropsType> = ({posts, dispatch}) => {
    return (
        <S.PostWrapper>
            <Form dispatch={dispatch} actionCreator={addPostAC} buttonTitle="Send Post"/>
            <Posts posts={posts}/>
        </S.PostWrapper>
    )
}