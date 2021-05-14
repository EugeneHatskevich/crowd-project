import React from 'react'
import {NavLink} from "react-router-dom";

export const ProfileListProject = (props) => {
    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Name</th>
                <th scope="col">Rating</th>
                <th scope="col">Tag</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {props.projects.map((project, index) => {
                return <tr>
                    <th scope="row">{index + 1}</th>
                    <td><NavLink to={'../../product/view/' + project.id}>{project.name}</NavLink></td>
                    <td>{(project.total_voice / project.voice_count).toFixed(1)}</td>
                    <td>@mdo</td>
                    <td>
                        <button className='btn btn-sm btn-primary'>Edit</button>
                        <button className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    )
}