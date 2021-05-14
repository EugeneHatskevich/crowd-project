import React from 'react'
import {Navbar} from "./Navbar";
import {connect} from "react-redux";

class NavbarContainer extends React.Component{
    render() {
        return (
            <Navbar {...this.props}/>
        )
    }
}

export default connect(null, {})(NavbarContainer)