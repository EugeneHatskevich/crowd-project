import React, {useContext} from 'react'
import {NavLink} from "react-router-dom";
import {ProfileListProject} from "./ProfileListProject";
import {ProfileListBonus} from "./ProfileListBonus";
import {AuthContext} from "../../context/AuthContext";
import avatar from '../../assets/img.png'

export const Profile = (props) => {

    const auth = useContext(AuthContext)

    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col-3'/>
                <div className='col-6'>
                    <div>
                        <img className="img-fluid w-50" src={avatar} alt='No avatar'/>
                    </div>
                    <div>
                        {auth.userName}
                    </div>
                <NavLink to='/profile/edit'>Edit</NavLink></div>
                <div className='col-3'/>
            </div>
            <div className='row'>
                <div className='col-3'/>
                <div className='col-6'>Medal</div>
                <div className='col-3'/>
            </div>
            <div className='row'>
                <div className='col-1'/>
                <div className='col-10'>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col"><h3>Project list</h3></div>
                        <div className="col-2 align-self-center"><NavLink to="./all_profile_project">Показать все</NavLink></div>
                    </div>
                    <ProfileListProject projects={props.projects} />
                </div>
                <div className='col-1'/>
            </div>
            <div className='row'>
                <div className='col-1'/>
                <div className='col-10'>
                    <h3>Bonus list</h3>
                    <ProfileListBonus bonuses={props.bonuses}/>
                </div>
                <div className='col-1'/>
            </div>
        </div>
    )
}