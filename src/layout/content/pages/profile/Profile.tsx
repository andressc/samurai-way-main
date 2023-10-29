import React from "react"
import * as S from "./Profile.styled"
import {AboutUser, AuthUserType} from "../../../../components/AboutUser/AboutUser"
import {PostWrapper} from "./post/PostWrapper"
import {PostType} from "../../../../components/Posts/Post"
import {ActionType} from "../../../../redux/actionType"

type PropsType = {
    user: AuthUserType
    posts: PostType[]
    dispatch: (action: ActionType) => void
}
export const Profile: React.FC<PropsType> = ({user, posts, dispatch}) => {
    return (
        <S.Profile>
            <S.ProfileCover
                src="https://cs8.pikabu.ru/post_img/big/2018/02/06/12/151794761518266918.jpg"
                alt="cover"/>
            <AboutUser user={user}/>
            <PostWrapper posts={posts} dispatch={dispatch}/>
        </S.Profile>
    )
}