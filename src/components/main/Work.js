import React from "react";
import Collapse from "react-bootstrap/Collapse";

import Project from '../projects/Project'
import Certificates from "../certifications/Certificates";

function Work(props) {
    return (
        <Collapse in={props.components.work}>
            <div id="work">
                <div className="top-card card card-body bg-secondary text-white py-4">
                    <h2>My Work</h2>
                    <p className="lead">Please find below all of my personal work</p>
                </div>
                <div className="card card-body py-4">
                    <Project name="tdd"/>
                    <Project name="ghstats"/>
                    <Project name="regex"/>
                    <Certificates/>
                </div>
            </div>
        </Collapse>
    )
}

export default Work;
