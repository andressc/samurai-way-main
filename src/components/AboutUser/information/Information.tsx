import React, {FC} from "react"
import * as S from "./Information.styled"
import {InformationItem} from "./InformationItem"
import {ProfileInformationType} from "../../../redux/reducers/profile-reducer"


type InformationPropsType = {
    information: ProfileInformationType[]
}
export const Information: FC<InformationPropsType> = ({information}) => {

    const InformationList: JSX.Element[] = information && information
        .map(information => (<InformationItem key={information.id} information={information}/>))

    return (
        <S.Information>
            {InformationList}
        </S.Information>
    )
}