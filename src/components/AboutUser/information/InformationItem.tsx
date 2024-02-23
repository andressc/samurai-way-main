import React, {FC} from "react"
import * as S from "./Information.styled"

type InformationItemPropsType = {
    title: string
    text: string
    fontWeight?: number
}

export const InformationItem: FC<InformationItemPropsType> = ({title, text, fontWeight = 700}) => {

    return (
        <S.InformationItem>
            <div>
                <span style={{fontWeight}}>{title}:</span>
                <span>{" " + text}</span>
            </div>
        </S.InformationItem>
    )
}