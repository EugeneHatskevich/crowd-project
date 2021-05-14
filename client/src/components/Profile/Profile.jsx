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
                        <img class="img-fluid w-50" src={avatar} alt='No avatar'/>
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
                    <h3>Project list</h3>
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