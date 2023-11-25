import {Menu} from "./Menu"
import {AppStateType} from "../../redux/redux-store"
import {connect} from "react-redux"
import {MenuItemType} from "../../redux/reducers/sidebar-reducer"

type MapStatePropsType = {
    menu: MenuItemType[]
}

export type PropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    menu: state.sidebar.menu,
})

export const MenuContainer = connect(mapStateToProps)(Menu)