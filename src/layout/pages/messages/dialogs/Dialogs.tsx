import React from "react"
import {S} from "./Dialogs_Styles"
import {Dialog, DialogType} from "./Dialog"

type DialogsPropsType = {
    dialogs: DialogType[]
}
export const Dialogs: React.FC<DialogsPropsType> = ({dialogs}) => {

    const dialogsList: Array<JSX.Element> = dialogs.map(dialog => (<Dialog key={dialog.id} dialog={dialog}/>))

    return (
        <S.Dialogs>
            {dialogsList}
        </S.Dialogs>
    )
}