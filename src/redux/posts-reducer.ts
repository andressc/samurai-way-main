import {ActionType} from "./actionType"
import {postsPageType} from "./stateType"

const ADD_POST = "ADD-POST"

let initialState: postsPageType = {
    posts: [
        {
            id: 1,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
            likes: 23,
            views: 12,
        },
        {
            id: 2,
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU",
            comment: "consectetur adipisicing elit",
            userId: 2,
            userName: "Nikolay Gobov",
            date: "23 nov 2023",
            likes: 122,
            views: 211,
        },
        {
            id: 3,
            userImg: "https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg",
            comment: "sit amet, consectetur!",
            userId: 3,
            userName: "Andrey Smith",
            date: "30 jan 2023",
            likes: 53,
            views: 27,
        },
        {
            id: 4,
            userImg: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",
            comment: "Facilis, unde!",
            userId: 4,
            userName: "James Ivon",
            date: "19 sep 2022",
            likes: 31,
            views: 1,
        },
        {
            id: 5,
            userImg: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png",
            comment: "Lorem consectetur adipisicing ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 5,
            userName: "Lina Potova",
            date: "11 oct 2023",
            likes: 3,
            views: 5,
        },
    ]
}


const postsReducer = (state: postsPageType = initialState, action: ActionType): postsPageType => {

    switch (action.type) {
        case ADD_POST:
            state.posts.push(
                {
                    id: state.posts.length,
                    userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
                    comment: action.userText.toString(),
                    userId: 1,
                    userName: "Arin Stone",
                    date: new Date().toString(),
                    likes: 23,
                    views: 12,
                }
            )
            return state

        default:
            return state
    }
}

export const addPostAC = (value: string) => ({type: ADD_POST, userText: value})

export default postsReducer