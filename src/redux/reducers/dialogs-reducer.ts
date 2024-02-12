export const ADD_MESSAGE = "dialog/ADD-MESSAGE"

export type FriendType = {
    userId: number
    userImg: string
    userName: string
    city: string
}

export type DialogType = {
    id: number
    userImg: string
    comment: string
    userName: string
    userId: number
    date: string
}

export type DialogsPageType = {
    friends: FriendType[]
    dialogs: DialogType[]
}

let initialState: DialogsPageType = {
    friends: [
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
    dialogs: [
        {
            id: 0,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 1,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 2,
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 2,
            userName: "Vasya F.",
            date: "11 oct 2023",
        },
        {
            id: 3,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 4,
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 2,
            userName: "Vasya F.",
            date: "11 oct 2023",
        },
        {
            id: 5,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 6,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 7,
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 2,
            userName: "Vasya F.",
            date: "11 oct 2023",
        },
    ],
}

export type DialogActionsType = AddMessageType

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogActionsType): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            const newComment =
                {
                    id: state.dialogs.length,
                    userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
                    comment: action.payload.userText.toString(),
                    userId: 1,
                    userName: "Arin Stone",
                    date: new Date().toString(),
                }
            return {...state, dialogs: [...state.dialogs, newComment]}
        }

        default:
            return state
    }
}

type AddMessageType = ReturnType<typeof addMessageAC>

export const addMessageAC = (value: string) => ({type: ADD_MESSAGE, payload: {userText: value}} as const)

export default dialogsReducer