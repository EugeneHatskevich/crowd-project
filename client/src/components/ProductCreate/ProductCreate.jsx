import React  from 'react'
import {Field, FieldArray, reduxForm} from "redux-form";
import {BonusProductCreateForm} from "./BonusProductCreate";
import {NewsProductCreateForm} from "./NewsProductCreate";

const ProductCreateForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Название проекта</label>
                <div className="col-sm-10">
                    <Field component='input' type='text' name='name' className='form-control'/>
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Теги</label>
                <div className="col-sm-10">
                    <Field component='input' type='text' name='tags' className='form-control'/>
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Описание</label>
                <div className="col-sm-10">
                    <Field component='input' type='text' name='description' className='form-control'/>
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Необходимо средств</label>
                <div className="col-sm-10">
                    <Field component='input' type='text' name='endPointValue' className='form-control'/>
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Дата окончания сбора средств</label>
                <div className="col-sm-10">
                    <Field component='input' type='date' name='endDate' className='form-control'/>
                </div>
            </div>
            <div>
                <FieldArray component={BonusProductCreateForm} name='bonuses'/>
            </div>
            <div>
                <FieldArray component={NewsProductCreateForm} name='news'/>
            </div>
            <button>OK</button>
        </form>
    )
}

export const ProductCreateReduxForm = reduxForm({form: 'createProduct'})(ProductCreateForm)