import React, {useContext, useState} from 'react'
import {Field, reduxForm} from "redux-form";
import {AuthContext} from "../../context/AuthContext";
import {authAPI} from "../../api/auth.api";
import {Preloader} from "../Preloader/Preloader";
import {NavLink, Redirect} from "react-router-dom";


export const LoginContainer = () => {

    const auth = useContext(AuthContext)
    const [loader, setLoader] = useState(false)

    const submitData = (values) => {
        setLoader(true)
        try {
            authAPI.loginUser({...values}).then(response => {
                auth.login(response.token, response.userId, response.firstName, response.profileId)
                setLoader(false)
            })
        } catch (e) {
            console.log(e)
            setLoader(false)
        }
    }

    if (!auth.isAuthenticated && loader) {
        return <Preloader/>
    } else if (auth.isAuthenticated && !loader) {
        return <Redirect to='/home'/>
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
                       className='form-control' required/>
            </div>
            <div className="form-floating mb-3">
                <label htmlFor="floatingInput" className="form-label">Password</label>
                <Field component="input" name='password' placeholder='Введите пароль' type='password'
                       className='form-control' required/>
            </div>
            <button className="w-30 btn btn-sm btn-primary">Войти</button>
            <NavLink to='/register'>Регистрация</NavLink>
        </form>
    )
}

const LoginReduxForm = reduxForm(
    {
        form: 'login'
    }
)(LoginForm)