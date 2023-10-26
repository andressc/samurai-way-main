import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import {GlobalStyled} from "./styles/Global.styled"
import App from "./App"
import React from "react"
import {StateType} from "./redux/stateType"


export const rerenderEntireTree = (state: StateType, addNewPost: (userText: string) => void) => {

    ReactDOM.render(
        <>
            <BrowserRouter>
                <GlobalStyled/>
                <App state={state} callBack={addNewPost}/>
            </BrowserRouter>
        </>,
        document.getElementById("root")
    )
}