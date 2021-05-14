import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    profileId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false,
    userName: null
})
