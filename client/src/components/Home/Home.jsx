import React from 'react'
import {NavLink} from "react-router-dom"
import dateformat from 'dateformat'

export const Home = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>Облако тегов</div>
                <div className='col-3'></div>
            </div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div>Top project</div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.topProjects.map((project, index) => {
                            return <tr key={project.id}>
                                <th scope="row">{index + 1}</th>
                                <td><NavLink to={'product/view/' + project.id}>{project.name}</NavLink></td>
                                <td>{project.description}</td>
                                <td>{project.voice_count !== 0 ? (project.total_voice / project.voice_count).toFixed(1) : 0}</td>
                                <td>{dateformat(project.date_update, 'yyyy-mm-dd')}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
                <div className='col-1'></div>
            </div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div>Update project</div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.updateProjects.map((project, index) => {
                            return <tr key={project.id}>
                                <th scope="row">{index + 1}</th>
                                <td><NavLink to={'product/view/' + project.id}>{project.name}</NavLink></td>
                                <td>{project.description}</td>
                                <td>{project.voice_count !== 0 ? (project.total_voice / project.voice_count).toFixed(1) : 0}</td>
                                <td>{dateformat(project.date_update, 'yyyy-mm-dd')}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}