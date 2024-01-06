import React, {FC} from "react"
import {Information} from "./information/Information"
import * as S from "./AboutUser.styled"
import {ProfileUserType} from "../../redux/reducers/profile-reducer"

type AboutUserPropsType = {
    user: ProfileUserType
}

export const AboutUser: FC<AboutUserPropsType> = ({user}) => {
    return (
        <S.AboutUser>
            <img src={user.userImg} alt="avatar"/>
            <div>
                <S.UserName>{user.userName}</S.UserName>
                <Information information={user.information}/>
            </div>
        </S.AboutUser>
    )
}