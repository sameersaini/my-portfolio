import React from "react";
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();

function ProjectCard(props) {
    const projectDesc = [];
    for (const [index, value] of props.projectDesc.entries()) {
        projectDesc.push(<li key={index}>{htmlToReactParser.parse(value)}</li>)
    }

    return (
        <div className="card m-2">
            <div className="card-header">
                <div>
                    <span className="d-inline-flex align-items-center">
                        <i className={`${props.iconType} fa-${props.icon} fa-2x`}/>
                        <a
                            href={props.projectLink}
                            className="ml-2"
                        >
                            <strong>{props.heading}</strong>
                        </a>
                    </span>
                    {
                        props.repoLink &&
                        <span className="float-right d-none d-lg-inline-flex align-items-center">
                            <i className="fab fa-github fa-2x"/>
                            <a
                                href={props.repoLink}
                                className="ml-2"
                                target="_blank"
                            >
                                <strong>Repo link</strong>
                            </a>
                        </span>
                    }
                </div>
            </div>
            <div className="card-body">
                <ul>
                    {projectDesc}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard;
