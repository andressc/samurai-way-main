import React, {FC} from "react"
import * as S from "./Profile.styled"
import {AboutUser} from "../../../../components/AboutUser/AboutUser"
import {PostWrapperContainer} from "./post/PostWrapperContainer"
import {ProfileType} from "../../../../redux/reducers/profile-reducer"
import {Redirect} from "react-router-dom"

type PropsType = {
    user: ProfileType
    authUserId: number | null
}
export const Profile: FC<PropsType> = ({user, authUserId}) => {

    if(!authUserId) return <Redirect to="/samurai-way-main/login"/>

    return (
        <S.Profile>
            <S.ProfileCover
                src="https://cs8.pikabu.ru/post_img/big/2018/02/06/12/151794761518266918.jpg"
                alt="cover"/>
            <AboutUser user={user}/>
            <PostWrapperContainer/>
        </S.Profile>
    )
}