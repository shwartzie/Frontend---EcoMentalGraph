
import { httpService } from './http.service.js'
import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service.js'
// import { showSuccessMsg } from '../services/event-bus.service'
import { utilService } from './util.service.js'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    signupGuest
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

window.userService = userService


async function getUsers() {
    console.log('gettings users');
    return httpService.get(`user`)
}

function onUserUpdate(user) {
   
    
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`)

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}
function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) {
        socketService.login(user._id)
        return user
    }
}
async function signup(userCred) {
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.login(user._id)
    // return saveLocalUser(user)
}
async function signupGuest() {
    const date = new Date()
    const demoId = JSON.stringify(date.getTime()).slice(5, 10)
    const guest = {
        fullname: 'Guest' ,
        username: 'Guest' + demoId,
        imgUrl: '',
        password: '123'
    }
    const user = await httpService.post('auth/signup', guest)
    socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    // const user = getLoggedinUser()
    // sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout', user)
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}







