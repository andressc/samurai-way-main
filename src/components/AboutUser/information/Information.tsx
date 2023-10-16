import React from "react"
import { S } from "./Information_Styles"
import {InformationItem} from "./InformationItem"

type InformationPropsType = {
    information: InformationItem[]
}
export const Information: React.FC<InformationPropsType> = ({information}) => {
    return (
        <S.Information>
            {information && information.map(v => <InformationItem title={v.title} description={v.description}/>)}
        </S.Information>
    )
}