import {ActionType} from "./actionType"
import {sidebarType} from "./stateType"
import profileIcon from "../assets/icons/profile.svg"
import messageIcon from "../assets/icons/message.svg"
import newsIcon from "../assets/icons/news.svg"
import musicIcon from "../assets/icons/music.svg"
import settingsIcon from "../assets/icons/setting.svg"

const initialState: sidebarType = {
    menu: [
        {
            id: 1,
            title: "Profile",
            link: "/profile",
            icon: profileIcon,
        },
        {
            id: 2,
            title: "Messages",
            link: "/messages",
            icon: messageIcon,
        },
        {
            id: 3,
            title: "News",
            link: "/news",
            icon: newsIcon,
        },
        {
            id: 4,
            title: "Friends",
            link: "/friends",
            icon: musicIcon,
        },
        {
            id: 5,
            title: "Settings",
            link: "/settings",
            icon: settingsIcon,
        },
    ]
}
const sidebarReducer = (state: sidebarType = initialState, action: ActionType): sidebarType => {
    return state
}

export default sidebarReducer