import React from "react";
import Social from './social-contacts/Social'
import myImage from "../img/image.jpg";

function TopContent(props) {
    return (
        <div id="main-header">
            <div className="row no-gutters">
                <div className="col-lg-4 col-md-5">
                    <img src={myImage} alt=""/>
                </div>
                <div className="col-lg-8 col-md-7">
                    <div className="d-flex flex-column">
                        <div className="p-5 bg-dark text-white">
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <h2 className="display-4">
                                    Sameer Saini
                                </h2>
                                <Social name="linkedin"/>
                                <Social name="github"/>
                                <Social name="hackerrank"/>
                                <Social name="medium"/>
                                <Social name="facebook"/>
                            </div>
                        </div>
                        <div className="bg-black p-4">
                            Experienced Full Stack Web Developer
                        </div>
                        <div>
                            <div className="d-flex flex-row text-white align-items-stretch text-center">
                                <div
                                    className="port-item bg-primary"
                                    onClick={() => props.handleComponentClick('home')}
                                    aria-controls="home"
                                    aria-expanded={props.components.home}
                                >
                                    <i className="fas fa-home f-2x d-block" />
                                    <span className="d-none d-sm-block">Home</span>
                                </div>
                                <div
                                    className="port-item bg-success"
                                    onClick={() => props.handleComponentClick('resume')}
                                    aria-controls="resume"
                                    aria-expanded={props.components.resume}
                                >
                                    <i className="fas fa-graduation-cap f-2x d-block" />
                                    <span className="d-none d-sm-block">Resume</span>
                                </div>
                                <div
                                    className="port-item bg-secondary"
                                    onClick={() => props.handleComponentClick('work')}
                                    aria-controls="work"
                                    aria-expanded={props.components.work}
                                >
                                    <i className="fas fa-folder-open f-2x d-block" />
                                    <span className="d-none d-sm-block">Work</span>
                                </div>
                                <div
                                    className="port-item bg-danger"
                                    onClick={() => props.handleComponentClick('contact')}
                                    aria-controls="contact"
                                    aria-expanded={props.components.contact}
                                >
                                    <i className="fas fa-envelope f-2x d-block" />
                                    <span className="d-none d-sm-block">Contact</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopContent;
