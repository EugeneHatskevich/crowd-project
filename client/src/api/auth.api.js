import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'd0006109-22bf-4a2b-a12a-1c786f43ea4f'
//     }
// })

export const authAPI = {
    registerUser(data) {
        return axios.post(`/api/auth/register`, {...data}
        ).then(response => response.data)
    },
    loginUser(data) {
        return axios.post(`/api/auth/login`, {...data}
        ).then(response => response.data )
    }

}
