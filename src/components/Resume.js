import React from "react";
import Collapse from "react-bootstrap/Collapse";

function Resume(props) {
    return (
        <Collapse in={props.components.resume}>
            <div id="resume">
                <div className="top-card card card-body bg-success text-white py-5">
                    <h2 className="d-inline">Resume</h2>
                    <span className="mb-2">
                      <a href="https://s3.amazonaws.com/sameer-saini-resume/Resume.pdf" target="_blank"
                         className="btn btn-sm btn-outline-light d-inline" rel="noopener noreferrer">
                          <i className="fas fa-cloud" /> Download Resume
                      </a>
                  </span>
                    <p className="lead">Click on the above link to download my resume and get a more detailed view of my
                        profile </p>
                </div>
                <div className="card card-body py-5">
                    <h3>Where Have I Worked?</h3>
                    <div className="card-deck mt-2">
                        <div className="card">
                            <div className="card-header">
                                <div><strong>Click Labs Pvt. Ltd.</strong></div>
                            </div>
                            <div className="card-body">
                                <p className="p-2 mb-3 bg-dark text-white">
                                    Position: Full Stack Web Developer
                                </p>
                                <p className="card-text">
                                    Created REST APIs, implemented real time location tracking using web sockets and configurable rule
                                    based matching algos.
                                </p>
                                <p className="card-text">
                                    Worked with AWS IAM service to create IAM users with restricted permissions to AWS S3 files.
                                </p>
                            </div>
                            <div className="card-footer">
                                <h6 className="text-muted">Mar, 2017 - Jul, 2018</h6>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div><strong>Aspiring Minds Pvt. Ltd.</strong></div>
                            </div>
                            <div className="card-body">
                                <p className="p-2 mb-3 bg-dark text-white">
                                    Position: Software Engineer
                                </p>
                                <p className="card-text">
                                    Implemented a customised version of open source code compile/run engine called Domjudge that allowed
                                    us to offer the programming assessment test in more than 10 different programming languages in a
                                    chroot secure environment.
                                </p>
                            </div>
                            <div className="card-footer">
                                <h6 className="text-muted">Jul, 2015 - Feb, 2017</h6>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div><strong>Hewlett Packard</strong></div>
                            </div>
                            <div className="card-body">
                                <p className="p-2 mb-3 bg-dark text-white">
                                    Position: Data Engineer
                                </p>
                                <p className="card-text">
                                    Automated a number of tasks using python and shell scripting to ensure the integrity of the data
                                    going in and out of the warehouse which reduced manual data checking effort by 90%.
                                </p>
                            </div>
                            <div className="card-footer">
                                <h6 className="text-muted">Sep, 2014 - Jul, 2015</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Collapse>
    )
}

export default Resume;
