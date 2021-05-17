import axios from "axios";

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
    },
    setBonusForProfile(bonusIdAndProfileId) {
        return axios.post('../../api/project/addBonusForProfile', bonusIdAndProfileId)
    }
}
