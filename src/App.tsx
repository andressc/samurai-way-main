import React, {Component} from "react"
import {Header} from "./layout/header/Header"
import {Footer} from "./layout/footer/Footer"
import {SideBar} from "./layout/sidebar/SideBar"
import {Content} from "./layout/content/Content"
import * as C from "./components/Styled/Components"
import {connect} from "react-redux";
import {getAuthUser} from "./redux/reducers/auth-reducer";
import {AppStateType} from "./redux/redux-store";
import {FlexWrapper} from "./components/Styled/Components";
import Preloader from "./components/Preloader/Preloader";

class App extends Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUser()
    }

    render() {

        if(!this.props.isInitialized) return <FlexWrapper $justify="center" $align="center"><Preloader/></FlexWrapper>

        return (
            <C.AppWrapper>
                <Header/>
                <SideBar/>
                <Content/>
                <Footer/>
            </C.AppWrapper>
        )
    }
}

type MapStatePropsType = {
    isInitialized: boolean
}

type MapDispatchPropsType = {
    getAuthUser: () => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isInitialized: state.app.isInitialized
})

export default connect(mapStateToProps, {getAuthUser})(App)

