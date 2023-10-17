import React from "react"
import * as S from "./Dialogs.styles"
import {Dialog, DialogType} from "./Dialog"

type DialogsPropsType = {
    dialogs: DialogType[]
}
export const Dialogs: React.FC<DialogsPropsType> = ({dialogs}) => {

    const dialogsList: JSX.Element[] = dialogs.map(dialog => (<Dialog key={dialog.id} dialog={dialog}/>))

    return (
        <S.Dialogs>
            {dialogsList}
        </S.Dialogs>
    )
}