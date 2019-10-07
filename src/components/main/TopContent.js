import React from "react";
import Social from '../social-contacts/Social'
import NavCell from '../nav-cell/NavCell'
import myImage from "../../img/image.jpg";

function TopContent(props) {
    return (
        <div id="main-header">
            <div className="row no-gutters">
                <div className="col-lg-3 col-md-4">
                    <img className="img-fluid" src={myImage} alt=""/>
                </div>
                <div className="col-lg-9 col-md-8">
                    <div className="d-flex flex-column">
                        <div className="px-5 py-4 bg-dark text-white">
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <h2 className="display-heading-small display-4">
                                    Sameer Saini
                                </h2>
                                <Social name="linkedin"/>
                                <Social name="github"/>
                                <Social name="hackerrank"/>
                                <Social name="medium"/>
                                <Social name="facebook"/>
                            </div>
                            <div className="d-flex flex-row justify-content-end">
                                    MS Information Systems, <span className="d-none d-sm-inline">University of Utah,</span> GPA 4.0
                            </div>
                        </div>
                        <div className="bg-black p-4">
                            Experienced Full Stack Web Developer
                        </div>
                        <div>
                            <div className="d-flex flex-row text-white align-items-stretch text-center">
                                <NavCell
                                    bgColor="primary"
                                    clickComponent="home"
                                    handleComponentClick={props.handleComponentClick}
                                    component={props.components.home}
                                    icon="home"
                                    nameText="Home"
                                />
                                <NavCell
                                    bgColor="success"
                                    clickComponent="resume"
                                    handleComponentClick={props.handleComponentClick}
                                    component={props.components.resume}
                                    icon="graduation-cap"
                                    nameText="Resume"
                                />
                                <NavCell
                                    bgColor="secondary"
                                    clickComponent="work"
                                    handleComponentClick={props.handleComponentClick}
                                    component={props.components.work}
                                    icon="folder-open"
                                    nameText="Work"
                                />
                                <NavCell
                                    bgColor="danger"
                                    clickComponent="contact"
                                    handleComponentClick={props.handleComponentClick}
                                    component={props.components.contact}
                                    icon="envelope"
                                    nameText="Contact"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopContent;
