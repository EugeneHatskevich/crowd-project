import React from 'react'

export const Bonus = (props) => {
    return (
        <div className="container-fluid pr-0">
            <div className="mb-2">
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseBonus" aria-expanded="false" aria-controls="collapseBonus">
                    {props.name}
                </button>
            </div>
            <div className="collapse mb-2" id="collapseBonus">
                <div className="container pr-0">
                    <div className="row mr-0 pr-0">
                        <div className="col-10 card card-body align-self-center p-2"><p
                            className="card-text">{props.description}</p></div>
                        <div className="col-2 pr-0">
                            <button className="btn btn-primary"
                                    style={{width: '146px'}}
                                    onClick={() => {
                                        alert('Оплата прошла успешно')
                                    }}>{props.value + " у.е."}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}