import React, {FC} from "react"
import * as S from "./Information.styled"
import {InformationItem} from "./InformationItem";


type InformationPropsType = {
    aboutMe: string
    setStatus: (status: string) => void
}
export const Information: FC<InformationPropsType> = ({aboutMe, setStatus}) => {

    return (
        <S.Information>
            <InformationItem aboutMe={aboutMe} title="About Me" setStatus={setStatus}/>
        </S.Information>
    )
}