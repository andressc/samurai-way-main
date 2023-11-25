import React from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {User} from "./User"
import {PropsType} from "./UsersContainer"

export const Users: React.FC<PropsType> = ({users, follow, unFollow, setUsers}) => {

    const friendsList: JSX.Element[] = users && users.map(user => <User key={user.userId}
                                                                        user={user}
                                                                        follow={follow}
                                                                        unFollow={unFollow}
    />)

    return (
        <BlockWrapper title="Users">
            {friendsList}
        </BlockWrapper>
    )
}