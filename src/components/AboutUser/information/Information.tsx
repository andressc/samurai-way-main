import React from "react"
import * as S from "./Information.styled"
import {InformationItem} from "./InformationItem"
import {InformationItemType} from "../../../redux/reducers/profile-reducer"


type InformationPropsType = {
    information: InformationItemType[]
}
export const Information: React.FC<InformationPropsType> = ({information}) => {

    const InformationList: JSX.Element[] = information && information
        .map(information => (<InformationItem key={information.id} information={information}/>))

    return (
        <S.Information>
            {InformationList}
        </S.Information>
    )
}