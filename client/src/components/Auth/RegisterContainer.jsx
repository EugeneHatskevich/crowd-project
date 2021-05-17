import React, {useState} from 'react'
import {authAPI} from "../../api/auth.api";
import {Field, reduxForm} from "redux-form";
import {Preloader} from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {required} from "../Form-control/validateFunction";


export const RegisterContainer = () => {

    const [loader, setLoader] = useState(false)

    const submitData = (values) => {
        setLoader(true)
        authAPI.registerUser({...values}).then(result => {
            setLoader(false)
            }
        )
    }

    if(loader) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className='col-5'>
            <RegisterReduxForm onSubmit={submitData}/>
        </div>
    )
}

const RegisterForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Введите email</label>
                <Field type="email" className="form-control" component='input'
                       name='email'
                       placeholder='Input your email' validate={[required]}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Введите пароль</label>
                <Field type="password" className="form-control" component='input'
                       name='password'
                       placeholder='Input your password' required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputFirstName" className="form-label">Введите имя</label>
                <Field type="text" className="form-control" component='input'
                       name='firstName'
                       placeholder='Input your first name' required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputLastName" className="form-label">Введите фамилию</label>
                <Field type="text" className="form-control" component='input'
                       name='lastName'
                       placeholder='Input your last name'/>
            </div>
            <button className="w-30 btn btn-sm btn-primary">Регистрация</button>
            <NavLink to='/login'>Войти</NavLink>
        </form>
    )
}

const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm)