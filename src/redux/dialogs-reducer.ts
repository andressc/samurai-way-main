import {dialogsPageType} from "./stateType"

const ADD_MESSAGE = "ADD-MESSAGE"

let initialState: dialogsPageType = {
    friends: [
        {
            userId: 1,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            userName: "Arin Stone",
            city: "Moscow",
        },
        {
            userId: 2,
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU",
            userName: "Nikolay Gobov",
            city: "Moscow",
        },
        {
            userId: 3,
            userImg: "https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg",
            userName: "Andrey Smith",
            city: "Moscow",
        },
        {
            userId: 4,
            userImg: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",
            userName: "James Ivon",
            city: "St. Petersburg",
        },
        {
            userId: 5,
            userImg: "https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg",
            userName: "Lina Potova",
            city: "Moscow",
        },
    ],
    dialogs: [
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
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 3,
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 2,
            userName: "Vasya F.",
            date: "11 oct 2023",
        },
        {
            id: 4,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 5,
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 2,
            userName: "Vasya F.",
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
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 8,
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 2,
            userName: "Vasya F.",
            date: "11 oct 2023",
        },
    ],
}

type ActionsType = AddMessageType

const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsType): dialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            state.dialogs.push(
                {
                    id: state.dialogs.length,
                    userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
                    comment: action.userText.toString(),
                    userId: 1,
                    userName: "Arin Stone",
                    date: new Date().toString(),
                }
            )
            return state
        }

        default:
            return state
    }
}

type AddMessageType = ReturnType<typeof addMessageAC>

export const addMessageAC = (value: string) => ({type: ADD_MESSAGE, userText: value})

export default dialogsReducer