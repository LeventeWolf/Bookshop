export interface User {
    username: string,
    avatar: string,
    isLoggedIn: boolean,
    isMember: 0 | 1,
    is_admin: 0 | 1,
    boughtAmount: number,
    error: string,
    userLoggingIn: boolean
}

export const initialUser: User = {
    username: '',
    avatar: '',
    isLoggedIn: false,
    isMember: 0,
    is_admin: 0,
    boughtAmount: 0,
    error: '',
    userLoggingIn:false
};