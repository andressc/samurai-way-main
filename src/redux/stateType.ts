import {PostType} from "../components/Posts/Post"
import {FriendType} from "../layout/content/pages/friends/Friend"
import {DialogType} from "../layout/content/pages/messages/dialogs/Dialog"
import {AuthUserType} from "../components/AboutUser/AboutUser"
import {MenuItemType} from "../components/Menu/MenuItem"

export type StateType = {
    posts: PostType[]
    friends: FriendType[]
    dialogs: DialogType[]
    user: AuthUserType
    menu: MenuItemType[]
}