import {store} from "./redux/redux-store"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import {GlobalStyles} from "./styles/Global.styled"
import App from "./App"
import React from "react"
import {StateType} from "./redux/stateType"
import {StoreContext} from "./StoreContext"

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <GlobalStyles/>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById("root")
    )
}

rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()))