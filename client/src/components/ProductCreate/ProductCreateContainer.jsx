import React, {useContext, useState} from 'react'
import {ProductCreateReduxForm} from "./ProductCreate";
import {connect} from "react-redux";
import {projectAPI} from "../../api/project.api";
import {AuthContext} from "../../context/AuthContext";
import {Preloader} from "../Preloader/Preloader";
import {Redirect} from "react-router-dom";

const ProductCreateContainer = (props) => {

    const auth = useContext(AuthContext)
    const [loader, setLoader] = useState(false)

    const submitData = (values) => {
        setLoader(true)
        projectAPI.createNewProject({...values, profileId:auth.profileId}).then(response => {
            setLoader(false)
        })
    }
    if (!auth.isAuthenticated && loader) {
        return <Preloader/>
    }
    else if(!auth.isAuthenticated && !loader){
        return <Redirect to='/login' />
    }

    return (
        <div className='container'>
            <ProductCreateReduxForm onSubmit={submitData}/>
        </div>
    )
}

export default connect(null, {})(ProductCreateContainer)