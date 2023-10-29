import {ActionType} from "./actionType"
import {postsPageType} from "./stateType"

const ADD_POST = "ADD-POST"

const postsReducer = (state: postsPageType, action: ActionType) => {

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