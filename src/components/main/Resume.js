import React from "react";
import Collapse from "react-bootstrap/Collapse";
import Company from "../companies/Company";

function Resume(props) {
    return (
        <Collapse in={props.components.resume}>
            <div id="resume">
                <div className="top-card card card-body bg-success text-white py-4">
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
                <div className="card card-body py-4">
                    <h3>Where Have I Worked?</h3>
                    <Company name="clearlink"/>
                    <Company name="clicklabs"/>
                    <Company name="aspiringminds"/>
                    <Company name="hp"/>
                </div>
            </div>
        </Collapse>
    )
}

export default Resume;
