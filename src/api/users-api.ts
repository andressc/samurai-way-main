import {instance, ResponseType} from "./domain"
import {UserType} from "../redux/reducers/users-reducer"

export type UserResponseType = {
    items: UserType[];
    totalCount: number;
    error: string[];
}

export const usersApi = {
    async getUsers(currentPage: number, pageSize: number) {
        let response = await instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },

    async follow(userId: number) {
        let response = await instance.post<ResponseType>(`follow/${userId}`, {})
        return response.data
    },

    async unFollow(userId: number) {
        let response = await instance.delete<ResponseType>(`follow/${userId}`)
        return response.data
    },
}