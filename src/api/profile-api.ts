import {instance, ResponseType} from "./domain"
import {AuthUserType} from "../redux/reducers/auth-reducer"

export type ProfileResponseType = {
    userId: number;
    aboutMe: string;
    contacts: ProfileResponseTypeContacts;
    lookingForAJob: boolean;
    lookingForAJobDescription?: string;
    fullName: string;
    photos: ProfileResponseTypePhotos;
}
export type ProfileResponseTypeContacts = {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
}

export type ProfileResponseTypePhotos = {
    small: string;
    large: string;
}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<ProfileResponseType>(`profile/${userId}`)
    },

    getAuthUser() {
        return instance.get<ResponseType<AuthUserType>>(`auth/me`)
    },
}