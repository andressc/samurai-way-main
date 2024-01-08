import React, {FC} from "react"
import {Information} from "./information/Information"
import * as S from "./AboutUser.styled"
import defaultAvatar from "../../assets/img/default_avatar.png"
import {ProfileType} from "../../redux/reducers/profile-reducer"

type AboutUserPropsType = {
    user: ProfileType
}

export const AboutUser: FC<AboutUserPropsType> = ({user}) => {
    return (
        <S.AboutUser>
            <img src={user.userImg ? user.userImg : defaultAvatar} alt="avatar"/>
            <div>
                <S.UserName>{user.fullName}</S.UserName>
                <Information aboutMe={user.aboutMe ? user.aboutMe : ""}/>
            </div>
        </S.AboutUser>
    )
}