import {Messages} from "./Messages"
import {connect} from "react-redux"
import {AppDispatch, AppState} from "../../../../redux/redux-store"
import {addMessageAC} from "../../../../redux/dialogs-reducer"

const mapStateToProps = (state: AppState) => ({
    dialogs: state.dialogsPage.dialogs,
    friends: state.dialogsPage.friends,
    buttonTitle: "Send Message",
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    callback: (newValue: string) => {
        dispatch(addMessageAC(newValue))
    }
})

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)