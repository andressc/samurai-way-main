import React, {useContext} from "react"
import {Menu} from "./Menu"
import {StoreContext} from "../../StoreContext"

export const MenuContainer: React.FC = () => {

    const context = useContext(StoreContext)

    return (
        <Menu menu={context.getState().sidebar.menu}/>
    )
}