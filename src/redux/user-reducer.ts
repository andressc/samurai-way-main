import {ActionType} from "./actionType"
import {userType} from "./stateType"

const initialState: userType = {
    user: {
        userId: 1,
        userName: "Vasya F.",
        userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
        information: [
            {
                id: 1,
                title: "Date of Birth",
                description: "13 jul",
            },
            {
                id: 2,
                title: "City",
                description: "Ivanovo",
            },
            {
                id: 3,
                title: "Education",
                description: "School",
            },
            {
                id: 4,
                title: "Web Site",
                description: "Https://Web.com",
            }
        ],
    }
}
const userReducer = (state: userType = initialState, action: ActionType): userType => {


    return state
}

export default userReducer