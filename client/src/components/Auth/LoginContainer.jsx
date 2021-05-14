import React, {useContext, useState} from 'react'
import {Field, reduxForm} from "redux-form";
import {AuthContext} from "../../context/AuthContext";
import {authAPI} from "../../api/auth.api";
import {Preloader} from "../Preloader/Preloader";


export const LoginContainer = () => {

    const auth = useContext(AuthContext)
    const [loader, setLoader] = useState(false)

    const submitData = (values) => {
        debugger
        setLoader(true)
        authAPI.loginUser({...values}).then(response => {
            auth.login(response.token, response.userId, response.firstName, response.profileId)
            setLoader(false)
        })
    }

    if (!auth.isAuthenticated && loader) {
        return <Preloader/>
    }

    return (
        <div className='col-5'>
            <LoginReduxForm onSubmit={submitData}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-floating mb-3">
                <label htmlFor="floatingInput">Email address</label>
                <Field component="input" name='email' placeholder='Введите email' type='email'
                       className='form-control'/>
            </div>
            <div className="form-floating mb-3">
                <label For="floatingInput" className="form-label">Password</label>
                <Field component="input" name='password' placeholder='Введите пароль' type='password'
                       className='form-control'/>
            </div>
            <button className="w-30 btn btn-sm btn-primary">Войти</button>
        </form>
    )
}

const LoginReduxForm = reduxForm(
    {
        form: 'login'
    }
)(LoginForm)