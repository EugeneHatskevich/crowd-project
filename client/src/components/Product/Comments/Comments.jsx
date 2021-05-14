import React, {useContext, useEffect, useState} from 'react'
import {Comment} from "./Comment";
import {projectAPI} from "../../../api/project.api";
import {AuthContext} from "../../../context/AuthContext";


export const Comments = (props) => {

    const [comments, setComments] = useState([])
    const [newComments, setNewComments] = useState({
        textNewComments: ''
    })

    const auth = useContext(AuthContext)

    const changeHandler = (event) => {
        setNewComments({...newComments, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        projectAPI.getProjectCommentsOrBonuses(props.projectId, 'comments').then(response => {
            setComments(response.comments)
        })
    }, [props.projectId])

    const addNewComment = () => {
        projectAPI.addNewComment({...newComments, authorId: auth.profileId, projectId: props.projectId}).then(data => {
            projectAPI.getProjectCommentsOrBonuses(props.projectId, 'comments').then(response => {
                setComments(response.comments)
            })
        })
    }

    let commentsList = comments.map(comment => {
        return (
            <Comment {...comment}/>
        )
    })

    return (
        <div className='row border border-dark'>
            <div className="container">
                <div className="text-center">
                    <h5>Комментарии</h5>
                </div>
                <div>
                    <textarea onChange={changeHandler} name='textNewComments'></textarea>
                </div>
                <div>
                    <button onClick={addNewComment}>Добавить комментарий</button>
                </div>
                <div>
                    {commentsList}
                </div>
            </div>
        </div>
    )
}