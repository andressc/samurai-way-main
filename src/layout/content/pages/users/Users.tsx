import React, {FC} from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {User} from "./User"
import {UserType} from "../../../../redux/reducers/users-reducer"
import {FlexWrapper} from "../../../../components/Styled/Components"
import {Button} from "../../../../components/Button/Button"
import Preloader from "../../../../components/Preloader/Preloader"

export type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    maxButtons: number
    isFetching: boolean
    authUserId: number | null
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
}

export const Users: FC<UsersPropsType> = ({
                                              users,
                                              authUserId,
                                              follow,
                                              unFollow,
                                              totalUsersCount,
                                              pageSize,
                                              currentPage,
                                              maxButtons,
                                              setCurrentPage,
                                              isFetching
                                          }) => {

    const totalPages: number = Math.ceil(totalUsersCount / pageSize)

    const generatePageNumbers = () => {
        const pageNumbers = []
        const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2))
        const endPage = Math.min(totalPages, startPage + maxButtons - 1)

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i)
        }

        return pageNumbers
    }

    const buttons: JSX.Element[] = generatePageNumbers().map(v => <Button key={v} title={v}
                                                                          className={v === currentPage ? "active" : ""}
                                                                          onClick={setCurrentPage}/>)

    const friendsList: JSX.Element[] = users && users.map(user => <User key={user.id}
                                                                        user={user}
                                                                        follow={follow}
                                                                        unFollow={unFollow}
                                                                        authUserId={authUserId}
    />)

    return (
        <BlockWrapper title="Users">
            <FlexWrapper $gap={10} $justify="center">
                {buttons}
            </FlexWrapper>
            <FlexWrapper $gap={10} $justify="center">
                <span>Total Pages: {totalPages}</span>
                <span>|</span>
                <span>Total Users: {totalUsersCount}</span>
            </FlexWrapper>
            {isFetching ? <Preloader/> : friendsList}
        </BlockWrapper>
    )
}