import {PostType} from "../components/Posts/Post"
import {DialogType} from "../layout/content/pages/messages/dialogs/Dialog"
import {AuthUserType} from "../components/AboutUser/AboutUser"
import {FriendType} from "../layout/content/pages/friends/Friend"
import {MenuItemType} from "../components/Menu/MenuItem"
import profileIcon from "../assets/icons/profile.svg"
import messageIcon from "../assets/icons/message.svg"
import newsIcon from "../assets/icons/news.svg"
import musicIcon from "../assets/icons/music.svg"
import settingsIcon from "../assets/icons/setting.svg"

type DbType = {
    posts: PostType[]
    friends: FriendType[]
    dialogs: DialogType[]
    user: AuthUserType
    menu: MenuItemType[]
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
            userId: 1,
            userImg: "https://брендлист.рф/upload/000/u60/73/53/manikyur-avatarka-photo-normal.jpg",
            userName: "Arin Stone",
            city: "Moscow",
        },
        {
            userId: 2,
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMTYZOYQG0cQOvm5v0-RRP2JHkkQOHB8m_g&usqp=CAU",
            userName: "Nikolay Gobov",
            city: "Moscow",
        },
        {
            userId: 3,
            userImg: "https://habrastorage.org/webt/5b/db/fe/5bdbfe8c54bc4130948080.jpeg",
            userName: "Andrey Smith",
            city: "Moscow",
        },
        {
            userId: 4,
            userImg: "https://i.pinimg.com/736x/b0/2d/a7/b02da7cbdb25c5e1f1ae9f4e0f73903b.jpg",
            userName: "James Ivon",
            city: "St. Petersburg",
        },
        {
            userId: 5,
            userImg: "https://xc-life.ru/wp-content/gallery/avatar-kosmos-devushki/avatarka-devushka.jpg",
            userName: "Lina Potova",
            city: "Moscow",
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
            userName: "Vasya F.",
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
            userName: "Vasya F.",
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
            userName: "Vasya F.",
            date: "11 oct 2023",
        },
    ],
    user: {
        userId: 1,
        userName: "Vasya F.",
        userImg: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
        information: [
            {
                id: 1,
                title: "Date of Birth",
                description: "13 jul",
            },
            {
                id: 2,
                title: "City",
                description: "Ivanovo",
            },
            {
                id: 3,
                title: "Education",
                description: "School",
            },
            {
                id: 4,
                title: "Web Site",
                description: "Https://Web.com",
            }
        ],
    },
    menu: [
        {
            id: 1,
            title: "Profile",
            link: "/profile",
            icon: profileIcon,
        },
        {
            id: 2,
            title: "Messages",
            link: "/messages",
            icon: messageIcon,
        },
        {
            id: 3,
            title: "News",
            link: "/news",
            icon: newsIcon,
        },
        {
            id: 4,
            title: "Friends",
            link: "/friends",
            icon: musicIcon,
        },
        {
            id: 5,
            title: "Settings",
            link: "/settings",
            icon: settingsIcon,
        },
    ]
}