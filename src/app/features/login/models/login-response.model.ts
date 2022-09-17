export interface LoginResponseModel {
    token: string,
    roles: string[],
    email: string
}