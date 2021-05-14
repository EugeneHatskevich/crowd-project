import React, {useEffect, useState} from 'react'
import {Home} from "./Home";
import {projectAPI} from '../../api/project.api'
import {Preloader} from "../Preloader/Preloader";

export const HomeContainer = (props) => {

    const [topProjects, setTopProjects] = useState([])
    const [updateProjects, setUpdateProjects] = useState([])
    const [topProjectLimit] = useState(5)
    const [updateProjectLimit] = useState(5)
    // const [tags, setTags] = useState([])
    const [loader, setLoader] = useState(false)


    useEffect(() => {
        setLoader(true)
        projectAPI.getUsers(topProjectLimit, 'rating').then(topData => {
            projectAPI.getUsers(updateProjectLimit, 'date_update').then(updateData => {
                setTopProjects(topData.results)
                setUpdateProjects(updateData.results)
                setLoader(false)
            })
        })
    }, [topProjectLimit, updateProjectLimit])

    if(loader) {
        return (
            <Preloader/>
        )
    }
    return (
        <Home topProjects={topProjects} updateProjects={updateProjects}/>
    )

}
