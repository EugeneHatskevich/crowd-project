import React, {useEffect, useState} from 'react'
import {Bonus} from "./Bonus";
import {projectAPI} from "../../../api/project.api";


export const Bonuses = (props) => {

    let [bonuses, setBonuses] = useState([])

    useEffect(() => {

        projectAPI.getProjectCommentsOrBonuses(props.projectId, 'bonuses').then(response => {
            setBonuses(response.results)
        })
    }, [props.projectId])

    const bonusList = bonuses.map(bonus => {
        return (
            <Bonus key={bonus.id} {...bonus}/>
        )
    })

    return (
        <div className='row border border-danger'>
            <div className="container">
                <div className="text-center">
                    Бонусы
                </div>
                <div>
                    {bonusList}
                </div>
            </div>
        </div>
    )
}