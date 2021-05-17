import React from 'react'
import {Field} from "redux-form";

export const NewsProductCreateForm = (props) => {
    return (
        <div>
            {props.fields.map((news, index) => {
                    return (
                        <div key={index} className="border-success border">
                            <div className='row'>
                                <div className="col-11">Новость #{index + 1}</div>
                                <div className="col-1"><button
                                    type="button"
                                    title="Remove News"
                                    onClick={() => props.fields.remove(index)}
                                    className="btn btn-danger">X</button></div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Название новости</label>
                                <div className="col-sm-6">
                                    <Field component='input' type='text' name={`${news}.name`} className='form-control'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Описание новости</label>
                                <div className="col-sm-6">
                                    <Field component='textarea' type='text' name={`${news}.description`}
                                           className='form-control'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Дата</label>
                                <div className="col-sm-6">
                                    <Field component='input' type='datetime-local' name={`${news}.date`} className='form-control'/>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
            <button type="button" onClick={() => props.fields.push({})}>Добавить новость</button>
        </div>
    )
}
