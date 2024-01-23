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
    async getProfile(userId: number) {
        let response = await instance.get<ProfileResponseType>(`profile/${userId}`)
        return response.data
    },

    async getAuthUser() {
        let response = await instance.get<ResponseType<AuthUserType>>(`auth/me`)
        return response.data
    },

    async getStatusUser(userId: number) {
        let response = await instance.get<string>(`profile/status/${userId}`)
        return response.data
    },

    async updateStatusUser(status: string) {
        let response = await instance.put<ResponseType>(`profile/status/`, {status})
        return response.data
    },
}