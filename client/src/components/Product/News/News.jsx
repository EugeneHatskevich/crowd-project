import React, {useEffect, useState} from 'react'
import {projectAPI} from "../../../api/project.api";
import {OneNews} from "./OneNews";


export const News = (props) => {

    let [news, setNews] = useState([])

    useEffect(() => {

        projectAPI.getProjectCommentsOrBonuses(props.projectId, 'news').then(response => {
            setNews(response.results)
        })
    }, [props.projectId])

    const newsList = news.map(elem => {
        return (
            <OneNews key={elem.id} {...elem}/>
        )
    })

    return (
        <div className='row border border-danger'>
            <div className="container">
                <div className="text-center">
                    <h5>Новости</h5>
                </div>
                <div>
                    {newsList}
                </div>
            </div>
        </div>
    )
}