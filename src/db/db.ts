import {PostType} from "../components/Posts/Post"
import {FriendType} from "../layout/pages/messages/friends/Friend"
import {DialogType} from "../layout/pages/messages/dialogs/Dialog"
import {AboutUserType} from "../components/AboutUser/AboutUser"

type DbType = {
    posts: PostType[]
    friends: FriendType[]
    dialogs: DialogType[]
    users: AboutUserType[]
}

export const db: DbType = {
    posts: [
        {
            id: 1,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
            likes: 23,
            views: 12,
        },
        {
            id: 2,
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU",
            comment: "consectetur adipisicing elit",
            userId: 2,
            userName: "Nikolay Gobov",
            date: "23 nov 2023",
            likes: 122,
            views: 211,
        },
        {
            id: 3,
            userImg: "https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg",
            comment: "sit amet, consectetur!",
            userId: 3,
            userName: "Andrey Smith",
            date: "30 jan 2023",
            likes: 53,
            views: 27,
        },
        {
            id: 4,
            userImg: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",
            comment: "Facilis, unde!",
            userId: 4,
            userName: "James Ivon",
            date: "19 sep 2022",
            likes: 31,
            views: 1,
        },
        {
            id: 5,
            userImg: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png",
            comment: "Lorem consectetur adipisicing ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 5,
            userName: "Lina Potova",
            date: "11 oct 2023",
            likes: 3,
            views: 5,
        },
    ],

    friends: [
        {
            id: 1,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            userName: "Arin Stone",
            userId: 1,
            active: true,
        },
        {
            id: 2,
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU",
            userName: "Nikolay Gobov",
            userId: 2,
            active: false,
        },
        {
            id: 3,
            userImg: "https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg",
            userName: "Andrey Smith",
            userId: 3,
            active: false,
        },
        {
            id: 4,
            userImg: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",
            userName: "James Ivon",
            userId: 4,
            active: false,
        },
        {
            id: 5,
            userImg: "https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg",
            userName: "Lina Potova",
            userId: 5,
            active: false,
        },
        {
            id: 6,
            userImg: "https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg",
            userName: "Lina Potova",
            userId: 6,
            active: false,
        },
        {
            id: 7,
            userImg: "https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg",
            userName: "Lina Potova",
            userId: 7,
            active: false,
        },
        {
            id: 8,
            userImg: "https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg",
            userName: "Lina Potova",
            userId: 8,
            active: false,
        },
        {
            id: 9,
            userImg: "https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg",
            userName: "Lina Potova",
            userId: 9,
            active: false,
        },
    ],
    dialogs: [
        {
            id: 1,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 2,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 3,
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 2,
            userName: "Andrey R.",
            date: "11 oct 2023",
        },
        {
            id: 4,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 5,
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 2,
            userName: "Andrey R.",
            date: "11 oct 2023",
        },
        {
            id: 6,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 7,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 1,
            userName: "Arin Stone",
            date: "11 oct 2023",
        },
        {
            id: 8,
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, unde!",
            userId: 2,
            userName: "Andrey R.",
            date: "11 oct 2023",
        },
    ],
    users: [
        {
            id: 1,
            information: [
                {
                    title: "Date of Birth",
                    description: "21 jul",
                },
                {
                    title: "City",
                    description: "St Peterburg",
                },
                {
                    title: "Education",
                    description: "School",
                },
                {
                    title: "Web Site",
                    description: "https://it-kamasutra.com",
                }
            ],
            userId: 1,
            userName: "Andrey Rebrov",
            userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",

        },
        {
            id: 2,
            information: [
                {
                    title: "Date of Birth",
                    description: "21 jul",
                },
                {
                    title: "City",
                    description: "St Peterburg",
                },
                {
                    title: "Education",
                    description: "School",
                },
                {
                    title: "Web Site",
                    description: "https://it-kamasutra.com",
                }
            ],
            userId: 2,
            userName: "Arin Stone",
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",

        },
        {
            id: 3,
            information: [
                {
                    title: "Date of Birth",
                    description: "21 jul",
                },
                {
                    title: "City",
                    description: "St Peterburg",
                },
                {
                    title: "Education",
                    description: "School",
                },
                {
                    title: "Web Site",
                    description: "https://it-kamasutra.com",
                }
            ],
            userId: 3,
            userName: "Nikolay Gobov",
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU",

        },
        {
            id: 4,
            information: [
                {
                    title: "Date of Birth",
                    description: "21 jul",
                },
                {
                    title: "City",
                    description: "St Peterburg",
                },
                {
                    title: "Education",
                    description: "School",
                },
                {
                    title: "Web Site",
                    description: "https://it-kamasutra.com",
                }
            ],
            userId: 4,
            userName: "Andrey Smith",
            userImg: "https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg",

        },
        {
            id: 5,
            information: [
                {
                    title: "Date of Birth",
                    description: "21 jul",
                },
                {
                    title: "City",
                    description: "St Peterburg",
                },
                {
                    title: "Education",
                    description: "School",
                },
                {
                    title: "Web Site",
                    description: "https://it-kamasutra.com",
                }
            ],
            userId: 5,
            userName: "James Ivon",
            userImg: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",

        },
    ]
}