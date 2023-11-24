import React from "react"
import {AppStore, store} from "./redux/redux-store"

export const StoreContext = React.createContext<AppStore>(store)