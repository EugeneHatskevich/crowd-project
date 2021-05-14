import axios from "axios";

export const profileAPI = {
    getProfileData(profileId) {
        return axios.get(`/api/profile/view/${profileId}`)
            .then(response => response.data)
    },
    updateName(name, profileId) {
        return axios.post('/api/profile/updateName', {name, profileId}).then(response => response.data)
    }
}
