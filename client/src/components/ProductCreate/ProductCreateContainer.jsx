import React, {useContext} from 'react'
import {ProductCreateReduxForm} from "./ProductCreate";
import {connect} from "react-redux";
import {projectAPI} from "../../api/project.api";
import {AuthContext} from "../../context/AuthContext";

const ProductCreateContainer = (props) => {

    const auth = useContext(AuthContext)

    const submitData = (values) => {

        projectAPI.createNewProject({...values, profileId:auth.profileId}).then(response => {
            console.log(response)
        })
    }

    return (
        <div className='container'>
            <ProductCreateReduxForm onSubmit={submitData}/>
        </div>
    )
}

export default connect(null, {})(ProductCreateContainer)