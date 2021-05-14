import React, {useContext, useState} from 'react'
import {AuthContext} from "../../context/AuthContext";
import {profileAPI} from "../../api/profile.api";

export const ProfileEdit = () => {

    const auth = useContext(AuthContext)

    const [editName, setEditName] = useState(false)
    const [name, setName] = useState(auth.userName)

    const editNameFunc = () => {
        setEditName(true)
    }
    const updateName = (event) => {
        profileAPI.updateName(name, auth.profileId).then(response => {
            setEditName(false)
        })
    }
    const changeNameHandler = (event) => {
        setName(event.target.value)
    }

    return (
        <div className='container'>
            <div>
                {!editName &&
                <div>
                    {auth.userName}
                    <button onClick={editNameFunc}>Edit name</button>
                </div>}
                {editName &&
                <div>
                    <input onChange={changeNameHandler} type='text' value={name}/>
                    <button onClick={updateName}>Ok</button>
                </div>}
            </div>
            <div>
                Email
            </div>
        </div>
    )
}