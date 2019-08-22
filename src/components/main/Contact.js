import React from "react";
import Collapse from "react-bootstrap/Collapse";

function Contact(props) {
    return (
        <Collapse in={props.components.contact}>
            <div id="contact">
                <div className="top-card card card-body bg-danger text-white py-4">
                    <h2>Contact</h2>
                    <p className="lead">Kindly fill the form below to get in touch</p>
                </div>
                <div className="card card-body py-4">
                    <h3>Get In Touch</h3>
                    <form id="contact-form mt-2">
                        <div className="form-group">
                            <div className="input-group input-group-lg">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-danger text-white">
                                      <i className="fas fa-user" />
                                  </span>
                                </div>
                                <input id="name" type="text" className="form-control bg-dark text-white" placeholder="Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group input-group-lg">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-danger text-white">
                                      <i className="fas fa-envelope" />
                                  </span>
                                </div>
                                <input id="emailid" type="email" className="form-control bg-dark text-white" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group input-group-lg">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-danger text-white">
                                      <i className="fas fa-pencil-alt" />
                                  </span>
                                </div>
                                <textarea id="messagetext" className="form-control bg-dark text-white" placeholder="Message" />
                            </div>
                        </div>
                        <input type="submit" id="submit" className="btn btn-danger btn-block btn-lg" />
                    </form>
                </div>
            </div>
        </Collapse>
    )
}

export default Contact;
