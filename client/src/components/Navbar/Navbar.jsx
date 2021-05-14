import React, {useContext} from 'react'
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import exitIcons from '../../assets/icons/exit.svg'
import {NavbarLogin} from "./NavbarLogin";
import {NavbarRegister} from "./NavbarRegister";

export const Navbar = (props) => {

    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        auth.logout()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">Твори добро</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container-fluid">
                        <div>
                            <form className="d-flex align-items-sm-end">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div><NavLink to='/product/create'>Create project</NavLink></div>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {!auth.isAuthenticated &&
                                    <div className="row">
                                        <div className="col-6 pr-0"><NavbarLogin /></div>
                                        <div className="col-6 pl-0"><NavbarRegister/></div>
                                    </div>}
                                    {auth.isAuthenticated &&
                                    <div>
                                        {'Hello, '}
                                        <NavLink to={'/profile/view/' + auth.profileId}>{auth.userName}</NavLink>
                                        {auth.isAuthenticated &&
                                        <NavLink to='/home' onClick={logoutHandler}><img width={30}
                                                                                         src={exitIcons}
                                                                                         alt="exit"/></NavLink>}
                                    </div>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}