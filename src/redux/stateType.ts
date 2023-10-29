import {PostType} from "../components/Posts/Post"
import {FriendType} from "../layout/content/pages/friends/Friend"
import {DialogType} from "../layout/content/pages/messages/dialogs/Dialog"
import {AuthUserType} from "../components/AboutUser/AboutUser"
import {MenuItemType} from "../components/Menu/MenuItem"

export type postsPageType = {
    posts: PostType[]
}

export type dialogsPageType = {
    friends: FriendType[]
    dialogs: DialogType[]
}

export type userType = {
    user: AuthUserType
}

export type sidebarType = {
    menu: MenuItemType[]
}

export type StateType = {
    postsPage: postsPageType
    dialogsPage: dialogsPageType
    user: userType
    sidebar: sidebarType
}