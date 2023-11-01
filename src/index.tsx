import {store} from "./redux/redux-store"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import {GlobalStyles} from "./styles/Global.styled"
import App from "./App"
import React from "react"
import {StateType} from "./redux/stateType"

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <GlobalStyles/>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById("root")
    )
}

rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()))