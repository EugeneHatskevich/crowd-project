import React from 'react'
import style from './Complete.module.css'

export const Complete = (props) => {

    return (
        <div className='container text-center'>
            <div>
                Сбор средств
            </div>
            <div>
                {"Дата окончания: " + props.endDate}
            </div>
            <div className={"row " + style.rowProgress}>
                <div className={"progress col " + style.progress}>
                    <div className={"progress-bar"}
                         style={{width:`${Number(props.percent).toFixed(0)}%`}}>{props.current + ' у.е.'}
                    </div>
                </div>
                <div className="col-2">{`Total: ${props.total} у.е.`}</div>
            </div>
        </div>
    )
}