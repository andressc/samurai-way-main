import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {GlobalStyled} from "./styles/Global.styled"
import {BrowserRouter} from "react-router-dom"
import {state} from "./redux/state"

ReactDOM.render(
    <>
        <BrowserRouter>
            <GlobalStyled/>
            <App state={state}/>
        </BrowserRouter>
    </>,
    document.getElementById("root")
)