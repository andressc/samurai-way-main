import React, {FC} from "react"
import {Information} from "./information/Information"
import * as S from "./AboutUser.styled"
import defaultAvatar from "../../assets/img/default-avatar.png"
import {ProfileType} from "../../redux/reducers/profile-reducer"

type AboutUserPropsType = {
    user: ProfileType,
    setStatus: (status: string) => void
}

export const AboutUser: FC<AboutUserPropsType> = ({user, setStatus}) => {

    return (
        <S.AboutUser>
            <img src={user.userImg ? user.userImg : defaultAvatar} alt="avatar"/>
            <div>
                <S.UserName>{user.fullName}</S.UserName>
                <Information aboutMe={user.status} setStatus={setStatus}/>
            </div>
        </S.AboutUser>
    )
}