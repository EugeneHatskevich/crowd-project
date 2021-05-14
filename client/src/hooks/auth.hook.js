import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [userName, setName] = useState(null)
    const [profileId, setProfileId] = useState(null)


    const login = useCallback((jwtToken, id, name, profileId) => {
        setToken(jwtToken)
        setUserId(id)
        setName(name)
        setProfileId(profileId)

        localStorage.setItem(storageName, JSON.stringify({
            userId:id, token:jwtToken, name: name, profileId: profileId}))

    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setName(null)
        setProfileId(null)

        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if(data && data.token){
            login(data.token, data.userId, data.name, data.profileId)
        }
    }, [login])

    return { login, logout, token, userId, userName, profileId}

}

