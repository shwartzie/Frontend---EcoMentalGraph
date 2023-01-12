import { userService } from "../../services/user.service"

export const login = (  loggedInUser ) => {
    return async (dispatch) => {
        const user = await userService.login(loggedInUser)
        dispatch({ type: 'LOGIN', loggedInUser: user })
    }
}


export const logout = ( loggedInUser ) => {
    return async (dispatch) => {
        const user = await userService.logout()
        dispatch({ type: 'LOGOUT', loggedInUser: user })
    }
}