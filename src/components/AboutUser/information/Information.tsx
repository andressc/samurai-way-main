import React from "react"
import { S } from "./Information_Styles"
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