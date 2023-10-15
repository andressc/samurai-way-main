import React from "react"
import {ContentBlock} from "../../../../components/ContentBlock"
import {SimpleCell} from "../../../../components/SimpleCell/SimpleCell"
import {NavLink} from "react-router-dom"

type DialogUserPropType = {
    img: string
    userName: string
    userId: number
    active?: boolean
}
export const DialogUser: React.FC<DialogUserPropType> = ({img, userName, userId, active}) => {
    return (
        <NavLink to={`/messages/${userId}`}>
            <ContentBlock hover={true} active={active}>
                <SimpleCell image={img} title={userName}/>
            </ContentBlock>
        </NavLink>
    )
}