import React from 'react'
import {Field} from "redux-form";

export const BonusProductCreateForm = (props) => {
    return (
        <div>
            {props.fields.map((bonus, index) => {
                    return (
                        <div key={index} className="border-dark border">
                            <div className='row'>
                                <div className="col-11">Бонус #{index + 1}</div>
                                <div className="col-1"><button
                                    type="button"
                                    title="Remove Bonus"
                                    onClick={() => props.fields.remove(index)}
                                    className="btn btn-danger">X</button></div>
                                </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Название бонуса</label>
                                <div className="col-sm-6">
                                    <Field component='input' type='text' name={`${bonus}.name`} className='form-control'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Описание бонуса</label>
                                <div className="col-sm-6">
                                    <Field component='input' type='text' name={`${bonus}.description`}
                                           className='form-control'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Стоимость</label>
                                <div className="col-sm-6">
                                    <Field component='input' type='text' name={`${bonus}.value`} className='form-control'/>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
            <button type="button" onClick={() => props.fields.push({})}>Add Bonus</button>
        </div>
    )
}