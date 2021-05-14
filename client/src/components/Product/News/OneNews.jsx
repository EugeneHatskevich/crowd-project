import React from 'react'

export const OneNews = (props) => {

    return (
        <div className="container-fluid pr-0">
            <div className="mb-2">
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseNews" aria-expanded="false" aria-controls="collapseNews">
                    {props.name}
                </button>
            </div>
            <div className="collapse mb-2" id="collapseNews">
                <div className="container pr-0">
                    <div className="row mr-0 pr-0">
                        <div className="col card card-body align-self-center p-2"><p
                            className="card-text">{props.description}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}