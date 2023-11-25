import React from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {User} from "./User"
import {PropsType} from "./UsersContainer"

export const Users: React.FC<PropsType> = ({users}) => {

    const friendsList: JSX.Element[] = users && users.map(user => <User key={user.userId} friend={user}/>)

    return (
        <BlockWrapper title="Users">
            {friendsList}
        </BlockWrapper>
    )
}