import React, {useContext, useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {profileAPI} from "../../api/profile.api";

export const SeeAllProject = (props) => {

    const profileId = useContext(AuthContext).profileId
    const [profileProject, setProfileProject] = useState([])

    useEffect(() => {
        profileAPI.getProfileData(profileId).then(response => {
            setProfileProject(response.projects)
            setProfileBonus(response.bonuses)
        })
    }, [profileId])

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Name</th>
                <th scope="col">Rating</th>
            </tr>
            </thead>
            <tbody>
            {props.projects.map((project, index) => {
                return <tr key={project.id}>
                    <th scope="row">{index + 1}</th>
                    <td><NavLink to={'../../product/view/' + project.id}>{project.name}</NavLink></td>
                    <td>{(project.total_voice / project.voice_count).toFixed(1)}</td>
                    {/*<td>*/}
                    {/*    <button className='btn btn-sm btn-primary'>Edit</button>*/}
                    {/*    <button className='btn btn-sm btn-danger'>Delete</button>*/}
                    {/*</td>*/}
                </tr>
            })}
            </tbody>
        </table>
    )
}