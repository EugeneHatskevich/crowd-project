import React from 'react'
import {LoginContainer} from "../Auth/LoginContainer";

export const NavbarLogin = (props) => {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                Войти
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title " id="exampleModalLabel">Войти</h5>
                            <button type="button" className="btn-close btn btn-danger"
                                    data-bs-dismiss="modal" aria-label="Close">x
                            </button>
                        </div>
                        <div className="modal-body">
                            <LoginContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}