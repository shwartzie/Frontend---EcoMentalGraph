import { userService } from "../../services/user.service"

export const login = (  loggedInUser ) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'LOGIN', loggedInUser })
            const user = await userService.login(loggedInUser)    
        } catch (error) {
            dispatch({ type: 'LOGIN', loggedInUser: null })

        }
        
       
    }
}

export const logout = ( loggedInUser ) => {
    return async (dispatch) => {
        try {
            const user = await userService.logout()
            dispatch({ type: 'LOGOUT', loggedInUser: user })
        } catch (error) {
            dispatch({ type: 'LOGOUT', loggedInUser: null })
        }
        
    }
}