import React from "react"
import {DialogUser} from "./DialogUser"
import {S} from "./DialogsUser_Styles"

export const DialogsUser: React.FC = () => {
    return (
        <S.DialogsUser>
            <DialogUser img={"https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg"}
                        userName={"Arin Stone"}
            />
            <DialogUser img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU"}
                        userName={"Nikolay Gobov"}
            />
            <DialogUser img={"https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg"}
                        userName={"Andrey Smith"}
            />
            <DialogUser img={"https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg"}
                        userName={"James Ivon"}
            />
            <DialogUser img={"https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg"}
                        userName={"Lina Potova"}
            />
        </S.DialogsUser>
    )
}