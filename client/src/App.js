import React from 'react'
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {HomeContainer} from "./components/Home/HomeContainer";
import {Route} from 'react-router-dom'
import ProfileContainer from "./components/Profile/ProfileContainer";
import ProfileEditContainer from "./components/Profile/ProfileEditContainer";
import {WithUrlDataProductContainerComponent} from "./components/Product/ProductContainer";
import ProductCreateContainer from "./components/ProductCreate/ProductCreateContainer";
import {LoginContainer} from "./components/Auth/LoginContainer";
import {RegisterContainer} from "./components/Auth/RegisterContainer";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";

export const App = () => {

    const {token, userId, login, logout, userName, profileId} = useAuth()
    const isAuthenticated = !!token

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated, userName, profileId
        }}>
            <NavbarContainer/>
            <Route path='/home' render={() => <HomeContainer/>} exact/>
            <Route path='/login' render={() => <LoginContainer/>} exact/>
            <Route path='/register' render={() => <RegisterContainer/>} exact/>
            <Route path='/profile/view/:profileId?' render={() => <ProfileContainer/>} exact/>
            <Route path='/profile/edit' render={() => <ProfileEditContainer/>} exact/>
            <Route path='/product/view/:projectId?' render={() => <WithUrlDataProductContainerComponent/>} exact/>
            <Route path='/product/create' render={() => <ProductCreateContainer/>} exact/>
        </AuthContext.Provider>
    );
}
