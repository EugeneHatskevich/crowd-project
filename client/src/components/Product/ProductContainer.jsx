import React, {useEffect, useState} from 'react'
import {Product} from "./Product";
import {projectAPI} from "../../api/project.api";
import {withRouter} from 'react-router-dom'
import {Preloader} from "../Preloader/Preloader";

const ProductContainer = (props) => {

    const [projectData, setProjectData] = useState({})
    const projectId = props.match.params.projectId
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        projectAPI.getProjectData(projectId).then(response => {
            setProjectData(response.results)
            setLoader(false)
        })
    }, [projectId])

    if (loader) {
        return (
            <Preloader/>
        )
    }

    return (
        <Product projectData={projectData} setProjectData={setProjectData}/>
    )
}

export const WithUrlDataProductContainerComponent = withRouter(ProductContainer)
