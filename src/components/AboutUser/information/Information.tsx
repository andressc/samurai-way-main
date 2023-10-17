import React from "react"
import * as S from "./Information.styled"
import {InformationItem, InformationItemType} from "./InformationItem"


type InformationPropsType = {
    information: InformationItemType[]
}
export const Information: React.FC<InformationPropsType> = ({information}) => {
    return (
        <S.Information>
            {information && information.map(v => <InformationItem key={v.id} information={v}/>)}
        </S.Information>
    )
}