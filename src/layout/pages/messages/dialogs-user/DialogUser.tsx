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
export const DialogUser: React.FC<DialogUserPropType> = (props) => {
    return (
        <NavLink to={`/messages/${props.userId}`}>
            <ContentBlock hover={true} active={props.active}>
                <SimpleCell image={props.img} title={props.userName}/>
            </ContentBlock>
        </NavLink>
    )
}