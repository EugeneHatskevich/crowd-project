import React from 'react'
import {Comments} from "./Comments/Comments";
import {Bonuses} from "./Bonuses/Bonuses";
import {Complete} from "./Complete/Complete";
import {Voices} from "./Voices/Voices";
import {projectAPI} from "../../api/project.api";
import {News} from "./News/News";
import {GalleryContainer} from "./Gallery/GalleryContainer";

export const Product = (props) => {

    let percentComplete = (props.projectData.current_cash * 100 / props.projectData.total_cash).toFixed(1)
    let rate = (props.projectData.total_voice / props.projectData.voice_count).toFixed(1)

    const onRateChanged = (rate, projectId) => {
        projectAPI.setNewVoice(rate, projectId).then(data => {
            if (data.status === 201) {
                props.setProjectData(data.data.results)
            }
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="col align-self-center text-right">
                    <h3>{props.projectData.name}</h3>
                </div>
                <div className="col-6 align-self-center">
                    <h5>Rating: {rate}</h5>
                </div>
            </div>
            <div className='row'>Tag</div>
            <div className='row'>{props.projectData.description}</div>
            <Voices {...props} onRateChanged={onRateChanged}/>
            <div className='row border border-success'><Complete total={props.projectData.total_cash}
                                                                 current={props.projectData.current_cash}
                                                                 percent={percentComplete}
                                                                 endDate={props.projectData.endDate}/></div>
            <Bonuses projectId={props.projectData.id}/>
            <GalleryContainer/>
            <News projectId={props.projectData.id}/>
            <Comments projectId={props.projectData.id}/>
        </div>
    )
}