import {ActionType} from "./actionType"
import {dialogsPageType} from "./stateType"

const ADD_MESSAGE = "ADD-MESSAGE"
const dialogsReducer = (state: dialogsPageType, action: ActionType) => {

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

export const addMessageAC = (value: string) => ({type: ADD_MESSAGE, userText: value})

export default dialogsReducer