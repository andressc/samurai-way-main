import React from "react"
import {Information} from "./information/Information"
import { S } from "./AboutUser_Styles"
import {InformationItemType} from "./information/InformationItem"

export type AuthUserType = {
    userId: number
    userName: string
    userImg: string
    information: InformationItemType[]
}

type AboutUserPropsType = {
    user: AuthUserType
}

export const AboutUser: React.FC<AboutUserPropsType> = ({user}) => {
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