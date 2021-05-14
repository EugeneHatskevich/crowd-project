import React from 'react'
import loader from '../../assets/Mech.gif'

export const Preloader = () => {
    return (
        <div className='container'>
            <img src={loader} alt={'Loader'}/>
        </div>
    )
}