import React from "react";
import Collapse from "react-bootstrap/Collapse";

function Work(props) {
    return (
        <Collapse in={props.components.work}>
            <div id="work">
                <div className="top-card card card-body bg-secondary text-white py-4">
                    <h2>My Work</h2>
                    <p className="lead">Pending....</p>
                </div>
                <div className="card card-body py-5">
                    <h3>What Have I Built?</h3>
                    <p>To be changed....</p>

                </div>
            </div>
        </Collapse>
    )
}

export default Work;
