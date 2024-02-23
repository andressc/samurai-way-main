import {instance, ResponseType} from "./domain"
import {AuthUserType} from "../redux/reducers/auth-reducer"

export type ProfileResponseType = {
    userId: number
    aboutMe: string
    contacts: ProfileResponseTypeContacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: ProfileResponseTypePhotos
}
export type ProfileResponseTypeContacts = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfileResponseTypePhotos = {
    small: string
    large: string
}

export type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export type UpdateProfilePayloadType = {
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ProfileResponseTypeContacts
}

export const profileApi = {
    async login(payload: LoginPayloadType) {
        const response = await instance.post<ResponseType<{ userId: number }>>(`auth/login`, payload)
        return response.data
    },

    async logout() {
        const response = await instance.delete<ResponseType>(`auth/login`)
        return response.data
    },

    async getCaptcha() {
        const response = await instance.get<{url: string}>(`security/get-captcha-url`)
        return response.data
    },

    async getProfile(userId: number) {
        const response = await instance.get<ProfileResponseType>(`profile/${userId}`)
        return response.data
    },

    async getAuthUser() {
        const response = await instance.get<ResponseType<AuthUserType>>(`auth/me`)
        return response.data
    },

    async getStatusUser(userId: number) {
        const response = await instance.get<string>(`profile/status/${userId}`)
        return response.data
    },

    async updateStatusUser(status: string) {
        const response = await instance.put<ResponseType>(`profile/status/`, {status})
        return response.data
    },

    async updatePhotoUser(image: File) {
        const formData = new FormData()
        formData.append("image", image)

        const response = await instance.put<ResponseType<{photos: ProfileResponseTypePhotos}>>(`profile/photo/`, formData, {headers: { "Content-Type": "multipart/form-data" }})
        return response.data
    },

    async updateProfileUser(payload: UpdateProfilePayloadType) {
        const response = await instance.put<ResponseType>(`profile`, payload)
        return response.data
    },
}