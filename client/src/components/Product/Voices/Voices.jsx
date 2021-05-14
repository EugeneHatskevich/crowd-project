import React from 'react'
import ratingStar from '../../../assets/icons/rating_star.svg'
import style from './Voices.module.css'

export const Voices = (props) => {

    let rating = [1, 2, 3, 4, 5]


    return (
        <div className="row">
            <div className="col-2"/>
            <div className="col-4 align-self-center text-right">
                <h4>Проголосуй-------------></h4>
            </div>
            <div className="col-3 align-self-center">
                <div className='container'>
                    <div className="row">
                        {rating.map(rate => {
                            return <span key={rate} className="col">
                        <div className="center">{<img className={style.img} src={ratingStar} alt={rate}
                                                      onClick={(e) => {
                                                          props.onRateChanged(rate, props.projectData.id)
                                                      }}/>}</div>
                        <div className="text-center">{rate}</div></span>
                        })}
                    </div>
                </div>
            </div>
            <div className="col-3"/>
        </div>
    )
}