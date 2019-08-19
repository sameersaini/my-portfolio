import React from "react";

function NavCell (props) {
    return (
        <div
            className={`port-item bg-${props.bgColor}`}
            onClick={() => props.handleComponentClick(props.clickComponent)}
            aria-controls={props.clickComponent}
            aria-expanded={props.component}
        >
            <i className={`fas fa-${props.icon} f-2x d-block`} />
            <span className="d-none d-sm-block">{props.nameText}</span>
        </div>
    )
}

export default NavCell;
