import {ActionType} from "../actionType"
import profileIcon from "../../assets/icons/profile.svg"
import messageIcon from "../../assets/icons/message.svg"
import newsIcon from "../../assets/icons/news.svg"
import userIcon from "../../assets/icons/user.svg"
import settingsIcon from "../../assets/icons/setting.svg"

export type MenuItemType = {
    id: number
    title: string
    link: string
    icon: string
}

export type SidebarType = {
    menu: MenuItemType[]
}

const initialState: SidebarType = {
    menu: [
        {
            id: 1,
            title: "Profile",
            link: "/samurai-way-main/profile",
            icon: profileIcon,
        },
        {
            id: 2,
            title: "Messages",
            link: "/samurai-way-main/messages",
            icon: messageIcon,
        },
        {
            id: 3,
            title: "News",
            link: "/samurai-way-main/news",
            icon: newsIcon,
        },
        {
            id: 4,
            title: "Users",
            link: "/samurai-way-main/users",
            icon: userIcon,
        },
        {
            id: 5,
            title: "Settings",
            link: "/samurai-way-main/settings",
            icon: settingsIcon,
        },
    ]
}
const sidebarReducer = (state: SidebarType = initialState, action: ActionType): SidebarType => {
    switch (action.type) {
        default:
            return state
    }
}

export default sidebarReducer