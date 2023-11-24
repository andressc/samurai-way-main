import React from "react"
import * as S from "./PostWrapper.styled"
import {addPostAC} from "../../../../../redux/posts-reducer"
import {FormContainer} from "../../../../../components/Form/FormContainer"
import {PostsContainer} from "../../../../../components/Posts/PostsContainer"

export const PostWrapper: React.FC = () => {
    return (
        <S.PostWrapper>
            <FormContainer actionCreator={addPostAC} buttonTitle="Send Post"/>
            <PostsContainer/>
        </S.PostWrapper>
    )
}