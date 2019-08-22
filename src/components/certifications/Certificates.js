import React from "react";
import Udemy from "../../img/udemy.png";
import Certificate from "./Certificate";

function Certificates() {
    return (
        <div className="card m-2">
            <div className="card-header">
                <div>
                    <span className="d-inline-flex align-items-center">
                        <i className="fas fa-user-graduate fa-2x"/>
                        <strong className="ml-2" style={{color: '#4285F4'}}>Certifications</strong>
                    </span>
                    <span className="float-right d-none d-lg-inline-flex align-items-center">
                        <img src={Udemy} alt='' style={{width: '25px'}}/>
                        <a
                            href="https://www.udemy.com/user/sameer-saini-3/"
                            className="ml-2"
                            target="_blank"
                        >
                            <strong>Udemy Profile</strong>
                        </a>
                    </span>
                </div>
            </div>
            <div className="card-body">
                <div className='d-md-flex flex-md-row'>
                    <Certificate name="react"/>
                    <Certificate name="vue"/>
                </div>
                <div className='d-md-flex flex-md-row'>
                    <Certificate name="angular"/>
                    <Certificate name="aws"/>
                </div>
                <div className='d-md-flex flex-md-row'>
                    <Certificate name="bootstrap"/>
                    <Certificate name="react-native"/>
                </div>
            </div>
        </div>
    )
}

export default Certificates;
