import React from "react"
import { S } from "./Posts_Styles"
import {Post} from "./Post"

export const Posts: React.FC = () => {

    return (
        <S.Posts>
            <Post img={"https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg"}
                  comment={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!"}
            />
            <Post img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU"}
                  comment={"consectetur adipisicing elit"}
            />
            <Post img={"https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg"}
                  comment={"sit amet, consectetur!"}
            />
            <Post img={"https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg"}
                  comment={"Facilis, unde!"}
            />
            <Post img={"https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg"}
                  comment={"Lorem consectetur adipisicing ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!"}
            />
        </S.Posts>
    )
}
