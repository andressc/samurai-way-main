import {store} from "./redux/redux-store"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import {GlobalStyles} from "./styles/Global.styled"
import App from "./App"
import React from "react"
import {Provider} from "react-redux"

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyles/>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
)
