import profileIcon from "../../assets/icons/profile.svg"
import messageIcon from "../../assets/icons/message.svg"
import newsIcon from "../../assets/icons/news.svg"
import userIcon from "../../assets/icons/user.svg"
import settingsIcon from "../../assets/icons/setting.svg"

export type ActionType = {
    type: string,
    [key: string]: string | number
}

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
            title: "Users",
            link: "/users",
            icon: userIcon,
        },
        {
            id: 5,
            title: "Settings",
            link: "/settings",
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