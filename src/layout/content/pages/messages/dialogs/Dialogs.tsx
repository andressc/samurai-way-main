import React, {useEffect, useRef, useState} from "react"
import * as S from "./Dialogs.styles"
import {Dialog} from "./Dialog"
import {DialogType} from "../../../../../redux/reducers/dialogs-reducer"

type DialogsPropsType = {
    dialogs: DialogType[]
}
export const Dialogs: React.FC<DialogsPropsType> = ({dialogs}) => {

    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        if (chatContainerRef.current) {
            if (initialLoad) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                setInitialLoad(false);
            } else {
                chatContainerRef.current.scrollTo({
                    top: chatContainerRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }
    }, [dialogs, initialLoad]);

    const dialogsList: JSX.Element[] = dialogs && dialogs.map(dialog => (<Dialog key={dialog.id} dialog={dialog}/>))

    return (
        <S.Dialogs ref={chatContainerRef}>
            {dialogsList}
        </S.Dialogs>
    )
}