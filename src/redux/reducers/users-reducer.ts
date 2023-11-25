const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export type UserType = {
    userId: number
    userImg: string
    userName: string
    city: string
    followed: boolean
}

export type UsersPageType = {
    users: UserType[]
}

let initialState: UsersPageType = {
    users: [
        {
            userId: 0,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            userName: "Arin Stone",
            city: "Moscow",
            followed: false,
        },
        {
            userId: 1,
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU",
            userName: "Nikolay Gobov",
            city: "Moscow",
            followed: false,
        },
        {
            userId: 2,
            userImg: "https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg",
            userName: "Andrey Smith",
            city: "Moscow",
            followed: true,
        },
        {
            userId: 3,
            userImg: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",
            userName: "James Ivon",
            city: "St. Petersburg",
            followed: false,
        },
        {
            userId: 4,
            userImg: "https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg",
            userName: "Lina Potova",
            city: "Moscow",
            followed: true,
        },
    ],
}

export type UserActionsType = FollowType | UnFollowType | SetUsersType

const usersReducer = (state: UsersPageType = initialState, action: UserActionsType): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.userId === action.userId ? {...user, followed: true} : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.userId === action.userId ? {...user, followed: false} : user)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

type FollowType = ReturnType<typeof followAC>
type UnFollowType = ReturnType<typeof unFollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)

export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)

export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)

export default usersReducer