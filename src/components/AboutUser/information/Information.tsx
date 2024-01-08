import React, {FC} from "react"
import * as S from "./Information.styled"
import {InformationItem} from "./InformationItem"


type InformationPropsType = {
    aboutMe: string
}
export const Information: FC<InformationPropsType> = ({aboutMe}) => {

    return (
        <S.Information>
            <InformationItem aboutMe={aboutMe} title="About Me"/>
        </S.Information>
    )
}