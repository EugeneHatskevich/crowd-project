import React, {useEffect, useState} from 'react'
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {profileAPI} from "../../api/profile.api";

const ProfileContainer = (props) => {

    const profileId = props.match.params.profileId
    const [profileProject, setProfileProject] = useState([])
    const [profileBonus, setProfileBonus] = useState([])

    useEffect(() => {
        profileAPI.getProfileData(profileId).then(response => {
            setProfileProject(response.projects)
            setProfileBonus(response.bonuses)
        })
    }, [profileId])


    return (
        <Profile projects={profileProject} bonuses={profileBonus}/>
    )

}

export default compose(
    withRouter)
(ProfileContainer)