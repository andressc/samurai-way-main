import React from "react"
import * as S from "./PostWrapper.styled"
import {Form} from "../../../../../components/Form/Form"
import {Posts} from "../../../../../components/Posts/Posts"
import {PostType} from "../../../../../components/Posts/Post"

type PropsType = {
    posts: PostType[]
    buttonTitle: string
    callback: (value: string) => void
}
export const PostWrapper: React.FC<PropsType> = ({posts, buttonTitle, callback}) => {
    return (
        <S.PostWrapper>
            <Form callback={callback} buttonTitle={buttonTitle}/>
            <Posts posts={posts}/>
        </S.PostWrapper>
    )
}