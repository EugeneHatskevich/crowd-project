import React from 'react'
import {RegisterContainer} from "../Auth/RegisterContainer";

export const NavbarRegister = (props) => {

    return (

        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#registerModal">
                Регистрация
            </button>
            <div className="modal fade" id="registerModal" tabIndex="-1"
                 aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title " id="registerModalLabel">Регистрация</h5>
                            <button type="button" className="btn-close btn-danger btn"
                                    data-bs-dismiss="modal" aria-label="Close">x
                            </button>
                        </div>
                        <div className="modal-body">
                            <RegisterContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}