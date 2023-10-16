import React from "react"
import {Information} from "./information/Information"
import { S } from "./AboutUser_Styles"
import {InformationItem} from "./information/InformationItem"

export type AboutUserType = {
    id: number
    userId: number
    userName: string
    userImg: string
    information: InformationItem[]
}

export const AboutUser: React.FC<AboutUserType> = ({userId, userName, userImg, information, id}) => {
    return (
        <S.AboutUser>
            <img src={userImg} alt="avatar"/>
            <div>
                <S.UserName>{userName}</S.UserName>
                <Information information={information}/>
            </div>
        </S.AboutUser>
    )
}