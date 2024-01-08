import {instance, ResponseType} from "./domain"
import {UserType} from "../redux/reducers/users-reducer"

export type UserResponseType = {
    items: UserType[];
    totalCount: number;
    error: string[];
}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
    },

    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, {})
    },

    unFollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
}