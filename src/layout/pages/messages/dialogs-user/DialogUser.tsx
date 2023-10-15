import React from "react"
import {Group} from "../../../../components/Group"
import {SimpleCell} from "../../../../components/SimpleCell/SimpleCell"

type DialogUserPropType = {
    img: string
    userName: string
}
export const DialogUser: React.FC<DialogUserPropType> = (props) => {
    return (
        <Group hover={true}>
            <SimpleCell image={props.img} title={props.userName}/>
        </Group>
    )
}