import React from "react"
import * as S from "./Profile.styled"
import {AboutUser, AuthUserType} from "../../../../components/AboutUser/AboutUser"
import {PostWrapper} from "./post/PostWrapper"

type PropsType = {
    user: AuthUserType
}
export const Profile: React.FC<PropsType> = ({user}) => {
    return (
        <S.Profile>
            <S.ProfileCover
                src="https://cs8.pikabu.ru/post_img/big/2018/02/06/12/151794761518266918.jpg"
                alt="cover"/>
            <AboutUser user={user}/>
            <PostWrapper/>
        </S.Profile>
    )
}