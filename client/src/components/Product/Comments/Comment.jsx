import React from 'react'
import {NavLink} from "react-router-dom";

export const Comment = (props) => {

    return (
        <div className='container'>
            <div>
                <div>
                    <NavLink to={'/profile/view/' + props.profileId}>{props.profileId}</NavLink>
                </div>
                {props.content}
            </div>
            <div>
                Likes = {props.like} Dislike = {props.dislike}
            </div>
        </div>
    )
}