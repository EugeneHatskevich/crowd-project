import React from 'react'
import {Field} from "redux-form";

export const BonusProductCreateForm = (props) => {
    return (
        <div>
            <button type="button" onClick={() => props.fields.push({})}>Add Bonus</button>
            {props.fields.map((bonus, index) => {
                    return (
                        <div key={index}>
                            <button
                                type="button"
                                title="Remove Bonus"
                                onClick={() => props.fields.remove(index)}/>
                            <h6>Bonus #{index + 1}</h6>
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
        </div>
    )
}