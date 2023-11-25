import {ActionType} from "../actionType"

export type UserType = {
    userId: number
    userImg: string
    userName: string
    city: string
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
        },
        {
            userId: 1,
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU",
            userName: "Nikolay Gobov",
            city: "Moscow",
        },
        {
            userId: 2,
            userImg: "https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg",
            userName: "Andrey Smith",
            city: "Moscow",
        },
        {
            userId: 3,
            userImg: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",
            userName: "James Ivon",
            city: "St. Petersburg",
        },
        {
            userId: 4,
            userImg: "https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg",
            userName: "Lina Potova",
            city: "Moscow",
        },
    ],
}

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {

    switch (action.type) {
        default:
            return state
    }
}

export default usersReducer