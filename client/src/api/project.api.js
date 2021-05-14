import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'd0006109-22bf-4a2b-a12a-1c786f43ea4f'
//     }
// })

export const projectAPI = {
    getUsers(limit, order) {
        return axios.get(`/api/project/sort?limit=${limit}&order_by=${order}`
        ).then(response => response.data)
    },
    getProjectData(projectId) {
        return axios.get(`/api/project/view/${projectId}`)
            .then(response => response.data)
    },
    getProjectCommentsOrBonuses(projectId, options) {
        return axios.get(`/api/project/${projectId}/data?options=${options}`)
            .then(response => response.data)
    },
    setNewVoice(voice, projectId) {
        return axios.put(`/api/project/voice/?voice=${voice}&id=${projectId}`)
    },
    createNewProject(data) {
        return axios.post('/api/project/create', {...data})
    },
    addNewComment(comment){
        return axios.post('../../api/project/addComment', comment)
    }
}
