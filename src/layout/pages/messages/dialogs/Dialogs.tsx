import React from "react"
import {S} from "./Dialogs_Styles"
import {Dialog, DialogType} from "./Dialog"

type DialogsPropsType = {
    dialogs: DialogType[]
}
export const Dialogs: React.FC<DialogsPropsType> = ({dialogs}) => {
    return (
        <S.Dialogs>
            {dialogs && dialogs.map(v => (
                <Dialog
                    id={v.id}
                    userImg={v.userImg}
                    comment={v.comment}
                    userId={v.userId}
                    userName={v.userName}
                    date={v.date}
                />
            ))}
        </S.Dialogs>
    )
}