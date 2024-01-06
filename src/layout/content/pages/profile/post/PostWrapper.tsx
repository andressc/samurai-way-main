import React, {FC} from "react"
import * as S from "./PostWrapper.styled"
import {Form} from "../../../../../components/Form/Form"
import {Posts} from "../../../../../components/Posts/Posts"
import {PropsType} from "./PostWrapperContainer"

export const PostWrapper: FC<PropsType> = ({posts, buttonTitle, callback}) => {
    return (
        <S.PostWrapper>
            <Form callback={callback} buttonTitle={buttonTitle}/>
            <Posts posts={posts}/>
        </S.PostWrapper>
    )
}