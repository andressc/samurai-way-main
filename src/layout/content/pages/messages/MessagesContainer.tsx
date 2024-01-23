import {Messages} from "./Messages"
import {connect} from "react-redux"
import {AppStateType} from "../../../../redux/redux-store"
import {
    addMessageAC,
    DialogActionsType,
    DialogType,
    FriendType
} from "../../../../redux/reducers/dialogs-reducer"
import {compose, Dispatch} from "redux"
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect"
import {ComponentType} from "react";


type MapStatePropsType = {
    dialogs: DialogType[]
    friends: FriendType[]
    buttonTitle: string
}

type MapDispatchPropsType = {
    callback: (newValue: string) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    dialogs: state.dialogsPage.dialogs,
    friends: state.dialogsPage.friends,
    buttonTitle: "Send Message",
})

const mapDispatchToProps = (dispatch: Dispatch<DialogActionsType>): MapDispatchPropsType => ({
    callback: (newValue: string) => {
        dispatch(addMessageAC(newValue))
    }
})

export const MessagesContainer =  compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)

/*
export const MessagesContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)*/
